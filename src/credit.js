const credit = (sum, stav, srok) => {
    const yearly = sum / srok;
    let paymentWhole = 0;
    for (let i = 0; i < srok; i++) {
        paymentWhole += yearly + (stav * sum);
        sum -= yearly;
    };
    return paymentWhole, sum - paymentWhole;
};

console.log(credit(200000, 0.1, 2));