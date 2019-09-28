let num = 0;

/**
 * num 인자를 받아 1초이후 1증가된 값 resolve, 3보다 커지는 경우 reject
 * @param {Number} num 
 */
const fnPromise = function(num) {
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

fnPromise(num).then((n) => {
    console.log("promise resolve1 : ", n);
    return fnPromise(n);
}).then((n) => {
    console.log("promise resolve2 : ", n);
    return fnPromise(n);
}).then((n) => {
    console.log("promise resolve3 : ", n);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("promise finally");
});