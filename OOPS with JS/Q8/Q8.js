class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}
MovieTicket.prototype.printTicket = function() {
    console.log(`Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: $${this.price}`);
};
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }
    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}
const online = new OnlineTicket('Avengers', 'A1', 15, 2);
online.printTicket();
console.log('Total Amount:', online.getTotalAmount()); // 17