class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }
    calculateFare() {
        if (!this.distance || this.distance < 0) {
            throw new Error('Distance must be positive and provided.');
        }
        return this.distance * 2;
    }
}
const trip = new Trip('Home', 'Office', 5);
try {
    console.log(trip.calculateFare()); // 10
} catch (error) {
    console.log(error.message);
}
const badTrip = new Trip('A', 'B', -1);
try {
    badTrip.calculateFare();
} catch (error) {
    console.log(error.message);
}