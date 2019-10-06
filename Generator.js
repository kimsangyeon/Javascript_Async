const co = require('co');

let num = 0;

function fn(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`promise : ${++num}`);
            if (num < 3) {
                resolve(num);
            } else {
                reject(`error!: ${num}`);
            }
        }, 1000);
    });
}

const fnGenerator = co.wrap(function* (n) {
    let result = n;

    try {
        console.log(`generator : ${result}`);
        result = yield fn(result);
        console.log(result);
        result = yield fn(result);
        console.log(result);
        result = yield fn(result);
        console.log(result);
    } catch(err) {
        console.log(err);
    } finally {
        console.log("finally");
    }
});

fnGenerator(num);