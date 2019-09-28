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

const fnAsyncAwait = async function(n) {
    let result = n;

    try {
        console.log(`async : ${result}`);
        result = await fnPromise(result);
        console.log(result);
        result = await fnPromise(result);
        console.log(result);
        result = await fnPromise(result);
        console.log(result);
    } catch(err) {
        console.log(err);
    } finally {
        console.log("finally");
    }
}

fnAsyncAwait(num);