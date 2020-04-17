/*
EXERCISE 01
Create a search function (array, criterion, ifEmpty), which receives an array and two functions.
If criterion is true, return the found element. Otherwise, return the result of executing the other function "ifEmpty".

Software Development Advanced Techniques and Technologies 2020
Autor: Nico Antonelli
*/

// Analyze if an Array contains any Prime Number (Primaly Test)
function criterion_primes(n) {
    if (Number.isNaN(n) || !Number.isInteger(n)) { return false; }
    if (n === 2) { return true; }
    if (n <= 1 || n % 2 === 0) { return false; }
    for (i = 3; i < n; i += 2) {
        if (n % i === 0) { return false; }
    }
    return true;
}

// If the Array doesn't contain any primes
function ifEmpty() {
    return "No element of the array satisfy the specified criterion"
}

// High Order Function
function search(array, criterion, ifEmpty) {
    let found = [];
    array.forEach(element => {
        if (criterion(element)) {
            found.push(element);
            // I can't break the forEach without throwing an Exception
            // I will take advantage of this and return all the results, not just one
        }
    });
    if (found.length) { return found; }
    return ifEmpty();
}

// Main Program
console.log("EXERCISE ONE: Primaly Test");
var list = [12, -1, 3, "foo", 2, Math.PI, "bar", true, 17, 1, 67, 4];
console.log("Array: ", list);
var result = search(list, criterion_primes, ifEmpty);
console.log("Primes: ", result);
