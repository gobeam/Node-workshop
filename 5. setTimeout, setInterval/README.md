# setTimeout
The setTimeout() method calls a callback function provided and runs it one time after a specified number of milliseconds. It takes three argument first one is callback function to be executed, second one is timeout period in millisecond and third one is argument to be passed inside callback function we pass.
It returns a number, representing the ID value of the timer that is set. Use this value with the clearTimeout() method to cancel the timer.

Example: 
```js
let timeout =  setTimeout(function example() {
	console.log('this function will be called after 1000 milisecond or 1 second');
},1000);
```
To clear timeout
```js
let timeout =  setTimeout(function example(argPassed) {
	console.log('this function will be called after 1000 milisecond or 1 second and argument is: ', argPassed);
},1000, 'Hello world');

clearTimeout(timeout); // It will clear the timeout
```

# setInterval
The setInterval() method calls a callback function provided and runs it every interval of specified number of milliseconds. It takes three argument first one is callback function to be executed, second one is timeout period in millisecond and third one is argument to be passed inside callback function we pass.
It returns a number, representing the ID value of the timer that is set. Use this value with the clearInterval() method to cancel the timer.

Example: 
```js
let interval =  setInterval(function example() {
	console.log('this function will be called on each interval of 1000 milisecond or 1 second');
},1000);
```
To clear interval
```js
let interval =  setInterval(function example(argPassed) {
	console.log('this function will be called  on each interval of 1000 milisecond or 1 second and argument is: ', argPassed);
},1000, 'Hello world');

clearInterval(interval); // It will clear the interval
```