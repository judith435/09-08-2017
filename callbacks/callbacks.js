
function divide(x, y, callbackFunction, errorCallbackFunction) {
    setTimeout(function() {
        if (y ==0) {
            errorCallbackFunction("Cannot divide by zero!");
        } else {
            callbackFunction(x/y);
        }
    }, 3000);

}

divide(5, 0, onDivideSuccess, onDivideFailure);
divide(5,1, onDivideSuccess, onDivideFailure);

divide(5,1, function(x) {
    console.log('anonymous: ' + x);
}, onDivideFailure);
function onDivideSuccess(x) {
   console.log(x);
}

function onDivideFailure(x) {
    console.log(x);
}
