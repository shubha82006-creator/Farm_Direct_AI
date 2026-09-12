def predict_price(crop, quantity):

    prices = {
        "Tomato":32,
        "Onion":24,
        "Rice":41
    }

    base = prices.get(crop,25)

    if quantity > 100:
        base += 2

    return base