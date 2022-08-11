interface IDetailedPrice {
  price: number;
  name: string;
}

interface ITouristicPackage {
  detailedPrices: Array<IDetailedPrice>;
  price(): number;
  perks(): string;
}

class SimpleTouristicPackage implements ITouristicPackage {
  simpleTouristicPackageDetail = {
    price: 100,
    name: "Eifel Tower",
  };
  detailedPrices: IDetailedPrice[] = [this.simpleTouristicPackageDetail];

  price(): number {
    this.detailedPrices.push(this.simpleTouristicPackageDetail);

    return this.simpleTouristicPackageDetail.price;
  }
  perks(): string {
    return "Visit to the Eifel Tower";
  }
}

abstract class TouristicPackageDecorator implements ITouristicPackage {
  protected touristicPackage: ITouristicPackage;
  detailedPrices: IDetailedPrice[];

  constructor(touristicPackage: ITouristicPackage) {
    this.touristicPackage = touristicPackage;

    this.detailedPrices = this.touristicPackage.detailedPrices.concat({
      price: this.decoratedPrice(),
      name: this.decoratedName(),
    });
  }

  price(): number {
    return this.touristicPackage.price();
  }
  perks(): string {
    return this.touristicPackage.perks();
  }

  abstract decoratedName(): string;
  abstract decoratedPrice(): number;
}

class TouristicPackageHotelDecorator extends TouristicPackageDecorator {
  decoratedPrice(): number {
    return 100;
  }
  decoratedName(): string {
    return "Hotel";
  }
  price(): number {
    return super.price() + this.decoratedPrice();
  }
  perks(): string {
    return super.perks() + `, ${this.decoratedName()}`;
  }
}

class TouristicPackageFlightDecorator extends TouristicPackageDecorator {
  decoratedPrice(): number {
    return 1200;
  }
  decoratedName(): string {
    return "Flight";
  }
  price(): number {
    return super.price() + this.decoratedPrice();
  }
  perks(): string {
    return super.perks() + `, ${this.decoratedName()}`;
  }
}

class TouristicPackageBoatTravelDecorator extends TouristicPackageDecorator {
  decoratedPrice(): number {
    return 200;
  }
  decoratedName(): string {
    return "Boat";
  }
  price(): number {
    return super.price() + this.decoratedPrice();
  }
  perks(): string {
    return super.perks() + `, ${this.decoratedName()}`;
  }
}

class TouristicPackageBlackFridayDecorator extends TouristicPackageDecorator {
  decoratedPrice(): number {
    return this.price() - super.price();
  }
  decoratedName(): string {
    return "Black Friday";
  }
  price(): number {
    return super.price() * 0.8;
  }
  perks(): string {
    return super.perks() + `, at 20% discount`;
  }
}

const simpleTouristicPackage = new SimpleTouristicPackage();
const hotelDecorated = new TouristicPackageHotelDecorator(
  simpleTouristicPackage
);
const flightDecorated = new TouristicPackageFlightDecorator(hotelDecorated);
const boatTravelDecorated = new TouristicPackageBoatTravelDecorator(
  flightDecorated
);
const fullPackage = new TouristicPackageBlackFridayDecorator(
  boatTravelDecorated
);

console.log(fullPackage.price());
console.log(fullPackage.perks());
console.log(fullPackage.detailedPrices);
