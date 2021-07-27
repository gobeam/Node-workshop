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

### Some Array Methods
#### push
If you want to add an element on last position of an array you can use push method. Push takes a new element as an argument.
```js
let fruits = ['apple', 'mango', 'pears'];
fruits.push('avocado');
console.log(fruits) // ['apple', 'mango', 'pears', 'avocado']
```
#### pop
If you want to remove an element from last position of an array you can use pop method.

```js
let fruits = ['apple', 'mango', 'pears'];
fruits.pop();
console.log(fruits) // ['apple', 'mango']
```

#### shift
shift removes first element/item from an array.
```js
let fruits = ['apple', 'mango', 'pears'];
fruits.shift();
console.log(fruits) // ['mango', 'pears']
```

#### unshift
unshift adds new element at 0 index or first position of an array. It takes new element to be inserted as an argument.
```js
let fruits = ['apple', 'mango', 'pears'];
fruits.unshift('strawberry');
console.log(fruits) // ['strawberry', 'apple', 'mango', 'pears']
```

#### splice
splice can be used to insert new element on any index position of an array. Splice take first argument index which denotes on which position new elements needs to be inserted. Second argument is how many items to be removed, if you dont want any element to be removed it can be 0 and after that any argument you pass will be added as new element in an array.
```js
let fruits = ['apple', 'mango', 'pears'];
fruits.splice(2,0,'berry', 'kiwi');
console.log(fruits) // ['apple', 'mango', 'berry', 'kiwi', 'pears']
```

splice also can be used to remove an item from an array. For that you can pass index of item to be removed and how many items you want to remove as an second argument. That's all and you are good to go.
```js
let fruits = ['apple', 'mango', 'pears'];
fruits.splice(1,1);
console.log(fruits) // ['apple', 'pears']
```

#### slice
slice is used when you want to create new array from existing array by providing the start and end index position as we want. First argument passed on slice will include that element but will remove all elements before it second argument passed on slice method will not include element of that index and removes every elements after that elements including itself.
```js
 let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
 let citrus = fruits.slice(1,3);
 console.log(fruits); //["Banana", "Orange", "Lemon", "Apple", "Mango"]
 console.log(citrus); // [ 'Orange', 'Lemon' ]
```

#### forEach
forEach is an array method that executes a provided function once for each array element. forEach takes a callback function as an argument. 
Provided callback is invoked with three arguments:
* the value of the element
* the index of the element
* the Array object being traversed
```js
let country_list = ["Afghanistan","Albania","Algeria","Andorra"];
country_list.forEach(function (element,index){
	console.log(element, index);
})
```

#### map
Map executes a provided function once for each array element and creates a new array from the return value from the provided callback function.
```js
let numbers = [1, 2, 3, 4, 5]; 
let newArray =  numbers.map(function(value, index) {
		return value * 2;
})
console.log(newArray) // [2,4,6,8,10];
```


## Objects
Object is a collection of properties, and a property is an association between a name (or key) and a value. Object can have many properties.
```js
let student = {};
student.name = 'John Doe';
student.roll = 123;
student.gender = 'male';
student. faculty = 'science';
console.log(student) // {name: 'John Doe', roll: 123, gender: 'male', faculty: 'science'}
```
To access object properties you can do it in two ways. Lets say you want to access name from student object.
```js
student.name; // 'John Doe'
```
or
```js
student['name']; // 'John Doe'
```
To get Object keys as an array:

```js
let student = { name: 'John Doe',
                roll: 123,
                gender: 'male',
                faculty: 'science'};
Object.keys(student); // ['name','roll','gender','faculty']
```
To get Object Values as an array:

```js
let student = { name: 'John Doe',
                roll: 123,
                gender: 'male',
                faculty: 'science'};
Object.values(student); // ['John Doe',123,'male','science']

```
#### for ...in object
The for...in statement iterates over all enumerable properties of an object that are keyed by strings.
  ```js
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"
```
## Reference
[JavaScript Arrays](https://www.w3schools.com/js/js_arrays.asp)
