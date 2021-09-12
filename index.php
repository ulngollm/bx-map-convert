<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Сгенерировать MAP_DATA</title>
    <script type="module" defer src="script.js"></script>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <template id="input">
        <label>
            <input class="input js-new-item" type="text" name="geo">
            <span class="icon">✅</span>

        </label>
    </template>
    <div class="container">
        <div class="layout">
            <div class="inner">
                <label>
                    Впишите адрес
                    <input type="text" class="input js-add">
                </label>
                <form id="form" action="" name="city_list">
                </form>
            </div>
            <label for="params">
                Вставьте <code>MAP_DATA</code> из компонента
                <textarea id="params" class="input" name="params" id="" cols="26" rows="10" form="form" required></textarea>
            </label>
        </div>
        <button form="form" class="button">Получить координаты</button>
        <div class="result-wrapper">
            <button class="js-copy">copy all</button>
            <code id="result">
                Здесь будет результат в json
                c кнопкой copy_all
            </code>
        </div>

    </div>
</body>

</html>