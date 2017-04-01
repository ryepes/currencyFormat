function currencyFormat(amount, decimals) {
    try {
        amount += '';
        amount = parseFloat(amount.replace(/[^0-9\.]/g, ''));

        decimals = decimals || 0;

        if (isNaN(amount) || amount === 0)
            return parseFloat(0).toFixed(decimals);

        amount = '' + amount.toFixed(decimals);

        var partAmount = amount.split('.'),
            regexp = /(\d+)(\d{3})/;

        while (regexp.test(partAmount[0]))
            partAmount[0] = partAmount[0].replace(regexp, '$1' + ',' + '$2');

        return partAmount.join('.');

    } catch (e) {
        console.log(e.message);
    }
}
