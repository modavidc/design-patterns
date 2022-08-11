interface ITouristicPackage {
  getPrice(): number;
  getPerks(): string;
}

class SimpleTouristicPackage implements ITouristicPackage {
  getPrice(): number {
    return 100;
  }
  getPerks(): string {
    return "Visit to the Eifel Tower";
  }
}

abstract class TouristicPackageDecorator implements ITouristicPackage {
  touristicPackage: ITouristicPackage;

  constructor(touristicPackage: ITouristicPackage) {
    this.touristicPackage = touristicPackage;
  }

  getPrice(): number {
    return this.touristicPackage.getPrice();
  }
  getPerks(): string {
    return this.touristicPackage.getPerks();
  }
}

class TouristicPackageHotelDecorator extends TouristicPackageDecorator {
  getPrice(): number {
    return this.touristicPackage.getPrice() + 100;
  }
  getPerks(): string {
    return this.touristicPackage.getPerks() + ", Hotel";
  }
}

class TouristicPackageBoatTravelDecorator extends TouristicPackageDecorator {
  getPrice(): number {
    return this.touristicPackage.getPrice() + 50;
  }
  getPerks(): string {
    return this.touristicPackage.getPerks() + ", Boat travel";
  }
}

const simpleTouristicPackage = new SimpleTouristicPackage();
console.log(simpleTouristicPackage.getPrice());
console.log(simpleTouristicPackage.getPerks());

const boatTravelDecorated = new TouristicPackageBoatTravelDecorator(
  simpleTouristicPackage
);
console.log(boatTravelDecorated.getPrice());
console.log(boatTravelDecorated.getPerks());

const fullPackage = new TouristicPackageHotelDecorator(boatTravelDecorated);
console.log(fullPackage.getPrice());
console.log(fullPackage.getPerks());
