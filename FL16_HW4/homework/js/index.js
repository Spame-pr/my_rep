
let arrIng = []
let arrPrice = []
let sum = 0;
let rep;

class Pizza {

    constructor(size, type) {
        this.size = size;
        this.type = type;
        this.extra = [];
        this.allowedSizes = Pizza.allowedSizes;
        this.allowedTypes = Pizza.allowedTypes;
        this.allowedExtraIngredients = Pizza.allowedExtraIngredients;

        if (arguments.length !== 2) {
            throw new PizzaException('Required 2 argement,given: ' + arguments.length)
        }

        let i, j;

        for (i = 0; i < Pizza.allowedSizes.length; i++) {
            if (size === Pizza.allowedSizes[i]) {
                break;
            }
        }
        if (size !== Pizza.allowedSizes[i]) {
            throw new PizzaException('Invalid size')
        }

        for (j = 0; j < Pizza.allowedTypes.length; j++) {
            if (type === Pizza.allowedTypes[j]) {
                break;
            }
        }
        if (type !== Pizza.allowedTypes[j]) {
            throw new PizzaException('Invalid type')
        }
    }

    addExtraIngredient(ingredient) {
        this.extra = ingredient;

        if (arguments.length !== 1) {
            throw new PizzaException('Required 1 argement,given: ' + arguments.length)
        }
        let j;
        for (let j = 0; j < Pizza.allowedExtraIngredients.length; j++) {
            if (ingredient === Pizza.allowedExtraIngredients[j]) {
                break;
            }
        }
        if (ingredient === Pizza.allowedExtraIngredients[j]) {
            throw new PizzaException('Invalid extra ingredient')
        }
        for (let i = 0; i < arrIng.length; i++) {
            if (arrIng[i] !== this.extra.extra) {
                break;
            } else {
                throw new PizzaException('Duplicate ingredient')
            }
        }
        arrIng.push(this.extra.extra)
        arrPrice.push(this.extra.price)
    }

    removeExtraIngredient(ingredient) {

        this.extra = ingredient;

        if (arguments.length !== 1) {
            throw new PizzaException('Required 1 argement,given: ' + arguments.length)
        }
        let i;
        for ( i = 0; i < Pizza.allowedExtraIngredients.length; i++) {
            if (ingredient === Pizza.allowedExtraIngredients[i]) {
                break;
            } 
        }
         if(ingredient !== Pizza.allowedExtraIngredients[i]) {
            throw new PizzaException('Invalid extra ingredient')
        }
        const indexIng = arrIng.indexOf(this.extra.extra),
            indexPrice = arrPrice.indexOf(this.extra.price);

        if (indexIng, indexPrice > -1) {
            arrIng.splice(indexIng, 1);
            arrPrice.splice(indexPrice, 1);
        }
    }
    getExtraIngredients() {
        return arrIng.length;
    }

    getSize() {
        return this.size.size;
    }
    getPrice() {
        for (let i = 0; i < arrPrice.length; i++) {
            sum += arrPrice[i]
        }
        return this.size.price + this.type.price + sum
    }

    getPizzaInfo() {
        return `Size: ${this.getSize()},type: ${this.type.type};extra ingredients: ${arrIng}; price: ${this.getPrice()}`
    }
}

Pizza.SIZE_S = { size: 'Small', price: 50 }
Pizza.SIZE_M = { size: 'Medium', price: 75 }
Pizza.SIZE_L = { size: 'Large', price: 100 }

Pizza.TYPE_VEGGIE = { type: 'Veggie', price: 50 }
Pizza.TYPE_MARGHERITA = { type: 'Margherita', price: 60 }
Pizza.TYPE_PEPPERONI = { type: 'Pepperoni', price: 70 }

Pizza.EXTRA_TOMATOES = { extra: 'Tomatoes', price: 5 }
Pizza.EXTRA_CHEESE = { extra: 'Cheese', price: 7 }
Pizza.EXTRA_MEAT = { extra: 'Meat', price: 9 }

Pizza.allowedSizes = [Pizza.SIZE_S, Pizza.SIZE_M, Pizza.SIZE_L]
Pizza.allowedTypes = [Pizza.TYPE_VEGGIE, Pizza.TYPE_MARGHERITA, Pizza.TYPE_PEPPERONI]
Pizza.allowedExtraIngredients = [Pizza.EXTRA_TOMATOES, Pizza.EXTRA_CHEESE, Pizza.EXTRA_MEAT]

class PizzaException {
    constructor(message) {
        this.log = message;
    }
}
