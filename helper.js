function prepareData() {
    let name = document.querySelector('.card-title-view__title').innerText;
    let [lat, long] = document.querySelector('.toponym-card-title-view__coords-badge').innerText.split(',');
    return new City(name, long, lat);
}

function City(name, longtituge, latitude) {
    this.LON = longtituge;
    this.LAT = latitude;
    this.TEXT = name;
}

let cityList = [];
function addNewCityToList() {
    const city = prepareData();
    cityList.push(city);
}

function getCityJson(){
    console.log(JSON.stringify(cityList));
}
