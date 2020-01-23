// question 1 

var country = "Norway";

// question 2

var person = {
    name: "Farida",
    age: 28
};

// question 3 

var outOfStock = true

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
};

// question 4 

var cities = ["Oslo", "Cobenhagen", "Rome", "Paris", "Berlin"];

for (i = 0; i < cities.length; i++) {
    console.log(cities[i]);
};

// question 5 

for (i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6 

for (i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// question 7 

var personalInfo = [{
        name: "Farida",
        age: "28",
        student: true
    },
    {
        name: "James",
        age: "45",
        student: false
    }
];

for (i = 0; i < personalInfo.length; i++) {
    console.log(personalInfo[i].age, personalInfo[i].student);
};

// question 8 

function whatIDontLike(colors) {
    console.log("I don´t like " + colors);
}

whatIDontLike("red");


// question 9 

function subtract(a, b) {
    console.log(a - b);
}

subtract(58, 34);


// question 10 

var favouriteFood = [];

function selectFood(foodType) {
    favouriteFood.push(foodType);
    console.log(favouriteFood)
};

selectFood("Pizza");