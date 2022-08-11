"use strict";
class SimpleTouristicPackage {
    constructor() {
        this.simpleTouristicPackageDetail = {
            price: 100,
            name: "Eifel Tower",
        };
        this.detailedPrices = [this.simpleTouristicPackageDetail];
    }
    price() {
        this.detailedPrices.push(this.simpleTouristicPackageDetail);
        return this.simpleTouristicPackageDetail.price;
    }
    perks() {
        return "Visit to the Eifel Tower";
    }
}
class TouristicPackageDecorator {
    constructor(touristicPackage) {
        this.touristicPackage = touristicPackage;
        this.detailedPrices = this.touristicPackage.detailedPrices.concat({
            price: this.decoratedPrice(),
            name: this.decoratedName(),
        });
    }
    price() {
        return this.touristicPackage.price();
    }
    perks() {
        return this.touristicPackage.perks();
    }
}
class TouristicPackageHotelDecorator extends TouristicPackageDecorator {
    decoratedPrice() {
        return 100;
    }
    decoratedName() {
        return "Hotel";
    }
    price() {
        return super.price() + this.decoratedPrice();
    }
    perks() {
        return super.perks() + `, ${this.decoratedName()}`;
    }
}
class TouristicPackageFlightDecorator extends TouristicPackageDecorator {
    decoratedPrice() {
        return 1200;
    }
    decoratedName() {
        return "Flight";
    }
    price() {
        return super.price() + this.decoratedPrice();
    }
    perks() {
        return super.perks() + `, ${this.decoratedName()}`;
    }
}
class TouristicPackageBoatTravelDecorator extends TouristicPackageDecorator {
    decoratedPrice() {
        return 200;
    }
    decoratedName() {
        return "Boat";
    }
    price() {
        return super.price() + this.decoratedPrice();
    }
    perks() {
        return super.perks() + `, ${this.decoratedName()}`;
    }
}
class TouristicPackageBlackFridayDecorator extends TouristicPackageDecorator {
    decoratedPrice() {
        return this.price() - super.price();
    }
    decoratedName() {
        return "Black Friday";
    }
    price() {
        return super.price() * 0.8;
    }
    perks() {
        return super.perks() + `, at 20% discount`;
    }
}
const simpleTouristicPackage = new SimpleTouristicPackage();
const hotelDecorated = new TouristicPackageHotelDecorator(simpleTouristicPackage);
const flightDecorated = new TouristicPackageFlightDecorator(hotelDecorated);
const boatTravelDecorated = new TouristicPackageBoatTravelDecorator(flightDecorated);
const fullPackage = new TouristicPackageBlackFridayDecorator(boatTravelDecorated);
console.log(fullPackage.price());
console.log(fullPackage.perks());
console.log(fullPackage.detailedPrices);
