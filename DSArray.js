

//creating an array
const arr = [1,2,3,"vishnu"];
//printing an array using for of loop
for(Element of arr){
    console.log(Element);
}
//deleting an element
console.log("\n pop() :- deleting an element and returns that value");
let delet = arr.pop();//pop deletes and returns that element
console.log(delet);
//adding an element to array
console.log("\npush() :- adds an element to array");
arr.push(5);// appends 5 at end of the array 
console.log(arr);

//add  an element to the front of an array
console.log("\nunshift() :- adds an element to array in front");
arr.unshift(0);
console.log(arr);

//removes an element from front
console.log("\nshift() :- removes an element from front in array  ");
console.log(arr.shift());
console.log(arr);

console.log("\nIteration");
console.log("\n1. for loop");
for( let i=0, len=arr.length; i<len; i++ ) {
        console.log(arr[i]);
     }

     console.log("\n2. while loop");
     var counter=0;
     while(counter<arr.length){
        console.log(arr[counter]);
        counter++;
      }
      console.log("\n3. for in loop specifies index");
      for (var index in arr) {
        console.log(index);
        }
        console.log("\n4. for of loop ");
        for(Element of arr){
            console.log(Element);
        }
        console.log("\nslice :- takes two parameters: the beginning index and the ending index");
        console.log(arr.slice(0,2));
        console.log("\nsplice() :- This helper function returns and changes the contents of an array by removing existing elements  adding new elements.x");
        console.log("arr.splice(1,2,5,6,7)");
        console.log(arr.splice(1,2,5,6,7))
        console.log(arr);
       
        console.log("\nSpread Operator");
        function addFourNums(a, b, c, d) {
            return a + b + c + d;
             }
             var numbers = [1, 2, 3, 4];
             console.log(addFourNums(...numbers)); 