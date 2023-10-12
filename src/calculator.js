const calculator = (fuel, distance, price) => {
    let fuelPerOne = fuel / 100;
    return fuelPerOne * distance * price;
};