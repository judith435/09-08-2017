var app = {
    debugMode: true,
    screensApi: 'http://localhost/ls46/js-advanced/server/api/screens.php'
}

var screensArray = [];

function Screen(manufacturer, price, model, size) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.model = model;
    this.size = size;
}

$.ajax(app.screensApi).done(function(data) {
    if (app.debugMode) {
        console.log("screensApi response");
        console.log(data);
    }
    data = JSON.parse(data);
    // step 1
    for(let i=0; i < data.length; i++) {
        screensArray.push(new Screen(
            data[i].manufacturer,
            data[i].price,  
            data[i].model,
            data[i].size
        ));
    }

    // step 2
    $.ajax('templates/screen-template.html')
    .done(function(data) {
        for(let i=0; i < screensArray.length; i++) {
            let template = data;
            template = template.replace("{{manufacturer}}", screensArray[i].manufacturer);
            template = template.replace("{{price}}", screensArray[i].price);
            template = template.replace("{{model}}", screensArray[i].model);
            template = template.replace("{{size}}", screensArray[i].size);

            $('.screens').append(template);
        }
    });

});



