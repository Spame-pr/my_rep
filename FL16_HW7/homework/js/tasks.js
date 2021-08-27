function getMaxEvenElement(arr) {

    const num = arr.reduce((result, number) => {
        if (result < number && number % 2 === 0) {
            result = number;
        }
        return result
    })
    return num;
}

function changeVariables(a, b) {
    [a, b] = [b, a];
    return `${a},${b}`;
}

const getValue = (value) => value ?? '-';


const arrayOf = [
    ['name', 'den'],
    ['age', '21'],
    ['city', 'lviv']]

function arrayOfArrays(arr) {
    let a, b, c
    const [[, name] = a, [, age] = b, [, city] = c] = arr
    return { name, age, city }
}

const addUniqueId = obj => {
    let id = Symbol();
    return { ...obj, id };
}

const getRegroupObject = obj => {
    const {
        name: firstName,
        details: { id, age, univesity }
    } = obj;
    const user = { age, firstName, id };
    return { univesity, user }
};

const getArrayWithUniqueElements = (arr) => {
    let arrEmpty = [];

    for (let elem of arr) {
        if (!arrEmpty.includes(elem)) {
            arrEmpty.push(elem)
        }
    }
    return arrEmpty;
}

const hideNumber = (str) => str.substr(6).padStart(10, '*')

const add = function (a, b) {
    if (arguments.length < 2) {
        throw 'b i required'
    } else {
        return a + b
    }
}


function* generateSequence() {
    yield 'I';
    yield 'Love';
    yield 'EPAM';
}
