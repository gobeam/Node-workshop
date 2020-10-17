# Promise
Promise is an object that once called upon, will eventually resolve or reject and return a response based on some criteria that is specified within the Promise object.

A Promise is in one of these states:
* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation was completed successfully.
* rejected: meaning that the operation failed.

Promise takes a callback and passes two function resolve and reject on our custom passed callback function. If we call resolve the promise will success and any data passed as an argument inside resolve can be accessed in callback passed inside then method i.e chained in  promise. If reject is called than it should be handled inside callback function passed in catch method which is also chained in promise.

Incase of rejecting promise and we didn't handle it it will throw error named "unhandledpromiserejectionwarning";

Example: 
```js
let promiseArrowExample = () => {
	 return new Promise( (resolve, reject) => {
		let data = ['hello','promise'];
		if(data.length > 0) {
			resolve(data)
		} else {
			reject('this is empty array')
		}
	});
}

promiseArrowExample().then((result) => {
    console.log("Success respone: ", result);
}).catch((error) => {
    console.log("Error: ",error);
});

// it will output Success response: ['hello','promise'] as result
```

### Promise.resolve() 
The Promise.resolve() method returns a Promise object that is resolved with a given value.

```js
let promiseResolve = Promise.resolve(['hello', 'world']);
promiseResolve.then((result) => {
    // your logic here
  console.log(result); // ['hello', 'world']
});
```

### Promise.reject()
The Promise.reject() method returns a Promise object that is rejected with a given reason.

```js
let promiseReject = Promise.reject({error: 'reject error'});
promiseReject.then(function(result) {
    // your logic here
  console.log(result);
}).catch(error => {
console.log("Error: ",error);
});
```
Above example will output body inside error because it is rejected.

### Promise.all()
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
In case any error occurs none of the promises is resolved and error is thrown which should be handled inside catch method.

```js
 let promise1 = () => {
 	return new Promise(function(resolve, reject) {
		setTimeout(resolve, 100, 'promise 1')
 	})
 }

 let promsie2 = () => {
 	return new Promise(function(resolve, reject) {
		setTimeout(resolve, 200, 'promise 2')
 	})
 }

 Promise.all([promise1(),promsie2()]).then((result) => {
 	console.log(result); // ['promise 1', 'promise 2']
 }).catch((error) => {
 	console.log("Error:",error)
 })

// output will be ['promise 1', 'promise 2']
```

### Promise.race()
TThe Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
The first promise fulfilled either its is resolved or rejected will be the final output of the promise.

```js
 let promise1 = () => {
 	return new Promise(function(resolve, reject) {
		setTimeout(resolve, 200, 'promise 1')
 	})
 }

 let promsie2 = () => {
 	return new Promise(function(resolve, reject) {
		setTimeout(resolve, 100, 'promise 2')
 	})
 }

 Promise.race([promise1(),promsie2()]).then((result) => {
 	console.log(result); // 'promise 2'
 }).catch((error) => {
 	console.log("Error:",error)
 })

// output will be 'promise 2' because promise2 will be resolved first in 100 milisecond.
```

### finally
Finally is also chained in promise like then, catch .When the promise is settled, i.e either fulfilled or rejected, the specified callback function passed inside finally is executed.

```js
let promise = () => {
 	return new Promise((resolve, reject) => {
		setTimeout(reject, 1000,'custom error')
 	})
 };
 promise()
.then(result => console.log(result))
.catch( error => console.log("Error: ", error))
.finally(() => {
 	console.log('finally completed')
 });

// output: 
// Error: custom err
// finally completed
```


[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)