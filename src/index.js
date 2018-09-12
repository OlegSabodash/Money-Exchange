module.exports = function makeExchange(currency) {
    var number = currency;
    var coins = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    };
    var amount = {};
    if (currency <= 0) return {};
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" };

    for (var key in coins) {
        if (currency == 0) break;
        currency = currency / coins[key];
        if (currency < 1) {
            currency = number;
            continue
        };
        amount[key] = Math.floor(currency);

        number = number - amount[key] * coins[key];
        currency = number;
    }
    return amount;

}
