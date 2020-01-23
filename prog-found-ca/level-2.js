// question 1 

for (i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};

// question 2

var innerFunction = function() {
    console.log("I am a function");
}

function outerFunction(item) {
    item();
}

outerFunction(innerFunction);