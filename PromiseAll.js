
const fnPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1');
    }, 1000);
});

const fnPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('2')
    }, 1000);
});

const fnPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('3');
    }, 1000);
});

/**
 * promise [] 수행 후, 수행한 결과를 배열로 받는다 (values)
 * 각 Promise에 catch 할 경우 fnPromise2, fnPromise3, then 모두 수행, 예외 처리된 Promise resolve 값은 undefined
 */
Promise.all([fnPromise1, fnPromise2.catch(err => console.log('ex1) err:', err)), fnPromise3.catch(err => console.log('ex1) err:', err))]).then(values => {
    console.log('ex1 resolve:' ,values);
});

/**
 * promise [] 수행 후, 수행한 결과를 배열로 받는다 (values)
 * Promise.all catch 연결 된 경우 fnPromise2가 catch로 예외 발생시 fnPromise3, then은 수행하지 않는다.
 */
Promise.all([fnPromise1, fnPromise2, fnPromise3]).then(values => {
    console.log('ex2 resolve:' ,values);
}).catch(err => {
    console.log('; ex2) err:', err)
});
