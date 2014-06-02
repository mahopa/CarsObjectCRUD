var myApp = {};
//Array to hold cars
myApp.Cars = [];
myApp.CurrentCar = 0;
//Car Constructor Function
myApp.Car = function (make, model, pictureUrl) {
    this.make = make;
    this.model = model;
    this.pictureUrl = pictureUrl;
};
//Adds seed Car
myApp.Cars.push(new myApp.Car("Toyota", "Carolla", "http://www.blogcdn.com/www.autoblog.com/media/2011/08/carolla630.jpg"));
//Write div to display cars
myApp.WriteDiv = function (carToShow) {
    document.getElementById("CarPicture").innerHTML = "<img class='img-responsive' src='" + myApp.Cars[carToShow].pictureUrl + "'/>";
    document.getElementById("CarInfo").innerHTML =
        "Make: " +
        myApp.Cars[carToShow].make +
        "<br/>Model: " +
        myApp.Cars[carToShow].model +
        "<br/><div class='btn btn-danger' onclick='myApp.DeleteCar(" + carToShow + ")'>Delete </div>"+
        "<br/><div class='btn btn-warning' onclick='myApp.UpdateCar(" + carToShow + ")'>Update</div>";
};
//Create cars and push them to array
myApp.AddCar = function () {
    //pull values from html inputs
    var make = document.getElementById("make").value;
    var model = document.getElementById("model").value;
    var pictureUrl = document.getElementById("picture").value;
    //creates new car and pushed it into the array
    myApp.Cars.push(new myApp.Car(make, model, pictureUrl));
};
//Delete car from array
myApp.DeleteCar = function (targetCar) {
    myApp.Cars.splice(targetCar, 1);
    //Need to check to make sure the car I send the user to exists
    //redirecting to 0 for initial dev purposes
    myApp.PreviousCar();
};
//Update Car in array
//Shows user update info
myApp.UpdateCar = function (targetCar) {
    var car = myApp.Cars[targetCar];
    document.getElementById("EditCarModel").value = car.model;
    document.getElementById("EditCarMake").value = car.make;
    document.getElementById("EditCarUrl").value = car.pictureUrl;
    document.getElementById("EditCarId").value = targetCar;
};
//Saves updated Info
myApp.SaveUpdate = function () {

    var model = document.getElementById("EditCarModel").value;
    var make = document.getElementById("EditCarMake").value;
    var pictureUrl = document.getElementById("EditCarUrl").value;
    var i = document.getElementById("EditCarId").value;
    var car = new myApp.Car(make, model, pictureUrl);
    myApp.Cars[i] = car;
    myApp.WriteDiv(myApp.CurrentCar);
};

myApp.NextCar = function () {
    if (myApp.Cars.length - 1 > myApp.CurrentCar) {
        myApp.CurrentCar++;
    }
    myApp.WriteDiv(myApp.CurrentCar);

};
myApp.PreviousCar = function () {
    if (myApp.CurrentCar > 0) {
        myApp.CurrentCar--;
    }
    myApp.WriteDiv(myApp.CurrentCar);
};

//write first car to page
myApp.WriteDiv(myApp.CurrentCar);

