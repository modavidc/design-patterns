"use strict";
// Exercise: https://designpatternsphp.readthedocs.io/es/latest/Structural/Decorator/README.html
class BookingDecorator {
    constructor(booking) {
        this.booking = booking;
    }
}
class DoubleRoomBooking {
    calculatePrice() {
        return 40;
    }
    getDescription() {
        return "double room";
    }
}
class ExtraBed extends BookingDecorator {
    constructor() {
        super(...arguments);
        this.PRICE = 30;
    }
    calculatePrice() {
        return this.booking.calculatePrice() + this.PRICE;
    }
    getDescription() {
        return this.booking.getDescription() + " with extra bed";
    }
}
class WiFi extends BookingDecorator {
    constructor() {
        super(...arguments);
        this.PRICE = 2;
    }
    calculatePrice() {
        return this.booking.calculatePrice() + this.PRICE;
    }
    getDescription() {
        return this.booking.getDescription() + " with WiFi";
    }
}
const booking = new DoubleRoomBooking();
console.log(booking.calculatePrice());
console.log(booking.getDescription());
