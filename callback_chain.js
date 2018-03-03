function logCar(car, callback){
    console.log("Saw a %s car", car);
    if(cars.length){
        process.nextTick(function(){
            callback();
        });
    }
}

function logCars(cars){
    var car = cars.pop();
    logCar(car, function(){
        logCars(cars);
    });
}

var cars = ["Ferrari", "Porsche", "Bygatti", "Lamborghini", "Aston Martin"];
logCars(cars);