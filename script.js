const templateInput = document.querySelector('#input').content;

console.log(templateInput);

let cityList = [];

const actionInput = document.querySelector('.js-add');
actionInput.addEventListener('change', (e) => {
    let name = e.target.value;
    addNewCityField(name);
    addNewCity(name);
    e.target.value = '';
});

function addNewCityField(name) {
    const template = templateInput.cloneNode(true);
    document.forms.city_list.append(template);
    let newItem = document.querySelector('.js-new-item');
    newItem.value = name;
    newItem.classList.remove('js-new-item');
    newItem.addEventListener('change', removeEmptyField);
}

function addNewCity(name) {
    cityList.push(name);
}

function removeEmptyField(e) {
    if (!e.target.value) e.target.parentElement.remove();
}







function Point([longtituge, latitude], name) {
    this.LON = longtituge;
    this.LAT = latitude;
    this.TEXT = name;
}

document.forms.form.addEventListener('submit', getGeoList);

async function getGeoList(e) {
    e.preventDefault();
    const fields = e.target.querySelectorAll('input');
    let requests = [];
    for (let field of fields) {
        let requestString = 'https://geocode-maps.yandex.ru/1.x?apikey=976e3a16-0566-45c9-8b6f-7ea71f9f978d&format=json&results=1&geocode='
        let request = await fetch(requestString + field.value);
        requests.push(request);
    }
    const results = await Promise.allSettled(requests);
    let geos = [];
    if (results) {
        for (let result of results) {
            let response = await result.value.json();
            console.log(response);
            let geoObj = response.response.GeoObjectCollection.featureMember[0].GeoObject;
            let pos = geoObj.Point.pos.split(' ');
            let point = new Point(pos, geoObj.name)
            geos.push(point);

        }
    }
    const params = e.target.params.value;
    await getBxPreparedString(geos, params);
}

async function getBxPreparedString(newMapPoints, oldParams){
    let requestString = JSON.stringify(newMapPoints);
    // отправить параметры и новые точки на сервак
    let formData = new FormData();
    formData.append('points', requestString);
    formData.append('params', oldParams);
    let request = await fetch('generator.php', {
        method: "POST",
        body: formData
    });
    console.log(formData);
    if(request.ok){
        let result = await request.text();
        document.querySelector('#result').innerHTML = result;
    }
    // получить ответ и вставить в code
}