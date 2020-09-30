# Array
Arrays are used to store multiple values in a single variable. Array can hold more than one value at a time. We can access value of array through array index number. Arrays index always starts from 0 and on.

Array can be declared by:
```js
let fruits = ['apple', 'mango', 'pears'];
``` 
or
```js
let fruits = new Array('apple', 'mango', 'pears');
```
Both are valid way to declare array.

### How to access element of an array 
Element of an array can be accessed by referring to the index number.
Lets declare an array:
```js
let fruits = ['apple', 'mango', 'pears'];
``` 
Now to access its first element we should:
```js
// access first element
let firstElement = fruits[0];
console.log(firstElement); // 'apple'

// access second element
let secondElement = fruits[1];
console.log(secondElement); // 'mango'

```

### Changing value of an array
```js
//lets change value of first element

// previous value
console.log(fruits[0]); // apple

// change value of first element
fruits[0] = 'avocado';

// Current value
console.log(fruits[0]); // avocado

```

There is no restriction on which data types the elements of an array should be. It can be combination of string, number, boolean or even another array or objects.


## Objects

## Reference
[JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)