const howToTip = (friends, sum, tip) => {
    const sumWhole = sum + (sum * tip);
    return "С каждого по " + (sumWhole / friends) + " рублей, при общем счёте " + (sum + sum * tip) + " и чаевыми " + (sum * tip);
}

console.log(howToTip());