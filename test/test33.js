function solution(order) {
    const AMERICANO_PRICE = 4500;
    const CAFELATTE_PRICE = 5000;

    let totalAmount = 0;

    for (const menu of order) {
        switch (menu) {
            case "iceamericano":
            case "americanoice":
                totalAmount += AMERICANO_PRICE;
                break;

            case "hotamericano":
            case "americanohot":
                totalAmount += AMERICANO_PRICE;
                break;

            case "icecafelatte":
            case "cafelatteice":
                totalAmount += CAFELATTE_PRICE;
                break;

            case "hotcafelatte":
            case "cafelattehot":
                totalAmount += CAFELATTE_PRICE;
                break;

            case "americano":
                totalAmount += AMERICANO_PRICE;
                break;

            case "cafelatte":
                totalAmount += CAFELATTE_PRICE;
                break;

            case "anything":
                totalAmount += AMERICANO_PRICE; // Assume "anything" is a cold americano
                break;

            default:
                console.log("Invalid menu:", menu);
        }
    }

    return totalAmount;
}
