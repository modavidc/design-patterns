// Exercise: https://designpatternsphp.readthedocs.io/es/latest/Structural/Decorator/README.html

interface IBooking {
  calculatePrice(): number;

  getDescription(): string;
}

abstract class BookingDecorator {
  protected booking: IBooking;

  constructor(booking: IBooking) {
    this.booking = booking;
  }
}

class DoubleRoomBooking implements IBooking {
  calculatePrice(): number {
    return 40;
  }
  getDescription(): string {
    return "double room";
  }
}

class ExtraBed extends BookingDecorator {
  private PRICE = 30;

  calculatePrice(): number {
    return this.booking.calculatePrice() + this.PRICE;
  }

  getDescription(): string {
    return this.booking.getDescription() + " with extra bed";
  }
}

class WiFi extends BookingDecorator {
  private PRICE = 2;

  calculatePrice(): number {
    return this.booking.calculatePrice() + this.PRICE;
  }

  getDescription(): string {
    return this.booking.getDescription() + " with WiFi";
  }
}

const booking = new DoubleRoomBooking();
console.log(booking.calculatePrice());
console.log(booking.getDescription());

