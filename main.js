/* Gör en array som innehåller 5 st olika frukter av datatypen string.
let array = ["Banana", "Orange", "Apple", "Pineapple", "Pear"];
console.log(array);
*/

/*
gör en array som innehåller 3 olika datatyper, ex. string, number, array.
let array = ["en sträng", 14.3, ["lol", 5]];
console.log(array);



console.log() hur många objekt arrayen  innehåller.

let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length)


//I arrayen ovan, hämta cat.
let cat = animals.shift();
console.log(cat);

//I arrayen ovan, hämta funky chihuahua.
let funky = animals.pop();
console.log(funky);


//I arrayen ovan, byt ut hamster mot tiger.
animals[1] = "tiger";
console.log(animals);

//Lägg ihop nedantående arrayer.
let a = [1,2,3];
let b = [4,5,6];

let c = a.concat(b);
console.log(c);


//Merga ner array b på index 3 array a.
let a = [1,2,3,7,8,9];
let b = [4,5,6];
a.splice(3, 0, ...b);
console.log(a);


Klona arr.

let arr = ['a', 'b', 'c'];
let arrCopy = arr.slice();
console.log(arrCopy);
--------------------------------------------------------------------------------------------

Methods
.push(), .unshift(), .pop(), .shift(), .splice(), .includes(), .indexOf(), .substring()

let fruits = ['kiwi', 'apple', 'pear'];
//Lägg till en frukt i slutet av arrayen ovan.
fruits.push("pineapple")
console.log(fruits);

//Lägg till en frukt i början av arrayen ovan.
fruits.unshift("watermelon");
console.log(fruits);

//I arrayen ovan, ta bort sista frukten i arrayen.
fruits.pop();
console.log(fruits);

//I arrayen ovan, ta bort första frukten i arrayen.
fruits.shift();
console.log(fruits);

//Sätt in en frukt i arrayen ovan på index 1.
fruits.splice(1, 0, "banana");
console.log(fruits);

//Sätt in tre frukter i arrayen ovan på index 2.
fruits.splice(2, 0, "strawberry", "mango", "lemon");
console.log(fruits);


let names = ['David', 'Christoffer', 'Johan', 'Maja']
//I arrayen ovan, ta bort Christoffer och Johan.
names.splice(1, 2);
console.log(names);


let nums = [1,2,3,4,5,6,7,8,9];
//Spegelvänd på arrayen ovan.
console.log(nums.reverse());


let str = 'Supercalifragilisticexpialidocious';


//Kika om strängen ovan innehåller bokstaven n.
console.log(str.includes("n"));


//Kika om strängen ovan innehåller bokstaven x.
console.log(str.includes("x"));

//I ovanstående array, hitta vilket position första förekomsten av p har.
console.log(str.indexOf("p"));

//I strängen ovan, plocka fram de 5 första tecknena.
console.log(str.substring(0, 5));

//I strängen ovan, plocka fram de 7 sista tecknena.
console.log(str.substring(-7, str.length));
----------------------------------------------------------------------------------------------------




Advanced methods ( high order methods )

.filter()
*/
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];


//I arrayen ovan, filtera fram alla nummer över 5.
let filteredArray = numArray.filter((number) =>  number > 5);
console.log(filteredArray);

/*
I arrayen ovan, filtera fram alla nummer under 5.

let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]
Skriv ut alla namn som är 18 år eller över från arrayen ovan.

Skriv ut alla namn som är under 18 år från arrayen ovan.

.sort()
let arr = ['beta', 'alfa', 'gamma'];
Sortera ovanstående array alfabetisk.
let nums = [1,5,7,9,3,4,2,6,8];
Sortera ovanstående array numeriskt.

I person-arrayen ovan, sortera objekten efter ålder, yngst först.

I person-arrayen ovan, sortera objekten efter ålder, äldst först.

I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn

.map()
I person-arrayen ovan, gör om alla namn till versaler.

I person-arrayen ovan, spegelvänd alla namn.

Loop arrays
let fruits = ['apelsin', 'päron', 'äpple', 'kiwi'];
Loopa ut följande array med en forEach()-loop. console.log() varje ord.

Loopa ut följande array med en for of-loop. console.log() varje ord.

Loopa ut följande array med en for-loop. console.log() varje ord.

Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex:

0 - apelsin
1 - päron
...
*/