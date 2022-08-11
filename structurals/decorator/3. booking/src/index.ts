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

class ExtraBedDecorator extends BookingDecorator {
  private PRICE = 30;

  calculatePrice(): number {
    return this.booking.calculatePrice() + this.PRICE;
  }

  getDescription(): string {
    return this.booking.getDescription() + " with extra bed";
  }
}

class WiFiDecorator extends BookingDecorator {
  private PRICE = 5;

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

const bookingWithExtraBed = new ExtraBedDecorator(booking);
console.log(bookingWithExtraBed.calculatePrice());
console.log(bookingWithExtraBed.getDescription());

const fullBooking = new WiFiDecorator(bookingWithExtraBed);
console.log(fullBooking.calculatePrice());
console.log(fullBooking.getDescription());
