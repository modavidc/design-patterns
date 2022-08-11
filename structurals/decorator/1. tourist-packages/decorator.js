"use strict";
class SimpleTouristicPackage {
    getPrice() {
        return 100;
    }
    getPerks() {
        return "Visit to the Eifel Tower";
    }
}
class TouristicPackageDecorator {
    constructor(touristicPackage) {
        this.touristicPackage = touristicPackage;
    }
    getPrice() {
        return this.touristicPackage.getPrice();
    }
    getPerks() {
        return this.touristicPackage.getPerks();
    }
}
class TouristicPackageHotelDecorator extends TouristicPackageDecorator {
    getPrice() {
        return this.touristicPackage.getPrice() + 100;
    }
    getPerks() {
        return this.touristicPackage.getPerks() + ", Hotel";
    }
}
class TouristicPackageBoatTravelDecorator extends TouristicPackageDecorator {
    getPrice() {
        return this.touristicPackage.getPrice() + 50;
    }
    getPerks() {
        return this.touristicPackage.getPerks() + ", Boat travel";
    }
}
const simpleTouristicPackage = new SimpleTouristicPackage();
console.log(simpleTouristicPackage.getPrice());
console.log(simpleTouristicPackage.getPerks());
const boatTravelDecorated = new TouristicPackageBoatTravelDecorator(simpleTouristicPackage);
console.log(boatTravelDecorated.getPrice());
console.log(boatTravelDecorated.getPerks());
const fullPackage = new TouristicPackageHotelDecorator(boatTravelDecorated);
console.log(fullPackage.getPrice());
console.log(fullPackage.getPerks());
