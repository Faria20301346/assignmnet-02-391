
const lastModified = document.lastModified;
document.getElementById("lastmod").innerHTML = lastModified;

document.getElementById("pagelocation").innerHTML = location.pathname;
function fetchQuote() {
    var quotes = [
        "The only way to do great work is to love what you do.", 
        "Life is 10% what happens to us and 90% how we react to it.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
        "It always seems impossible until it’s done.",
        "Don’t watch the clock; do what it does. Keep going.",
        "The best way to predict your future is to create it.",
        "You miss 100% of the shots you don’t take.",
        "The harder I work, the luckier I get.",
        "Opportunities don't happen, you create them."
    ];
    var quotes_author = [
        "Steve Jobs", "Charles R. Swindoll", "Eleanor Roosevelt", 
        "Winston Churchill", "Nelson Mandela", "Sam Levenson", "Abraham Lincoln",
        "Wayne Gretzky", "Thomas Jefferson", "Chris Grosser"
    ];

    var random_quote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote_text").innerHTML = '"' + quotes[random_quote] + '"';
    document.getElementById("quote_author").innerHTML = quotes_author[random_quote];

    document.getElementById("quotes").style.backgroundColor = "#22c2b4";
    document.getElementById("quotes").style.borderColor = "#5d767b";
    document.getElementById("quote_text").style.color = "#fff";
    document.getElementById("quote_author").style.color = "#fff";
    document.getElementById("quote_icon").style.color = "#fff";
    document.getElementById("quote_text").style.fontFamily = "Amiri";
    document.getElementById("quote_text").style.fontWeight = "serif";        
}
fetchQuote();


function red() {
    document.getElementById("quotes").style.backgroundColor = "#EE6D78";
    document.getElementById("quotes").style.borderColor = "#1d3557";
    document.getElementById("quote_text").style.color = "#ffe3e0";
    document.getElementById("quote_author").style.color = "#ffe3e0";
    document.getElementById("quote_icon").style.color = "#ffe3e0";
    document.getElementById("quote_text").style.fontFamily = "Lobster";
    document.getElementById("quote_text").style.fontWeight = "cursive";
}
function blue() {
    document.getElementById("quotes").style.backgroundColor = "#778DA9";
    document.getElementById("quotes").style.borderColor = "#7400b8";
    document.getElementById("quote_text").style.color = "#80ffdb";
    document.getElementById("quote_author").style.color = "#80ffdb";
    document.getElementById("quote_icon").style.color = "#80ffdb";
    document.getElementById("quote_text").style.fontFamily = "Montserrat";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}
function yellow() {
    document.getElementById("quotes").style.backgroundColor = "#f9dc5c";
    document.getElementById("quotes").style.borderColor = "#003566";
    document.getElementById("quote_text").style.color = "#001d3d";
    document.getElementById("quote_author").style.color = "#001d3d";
    document.getElementById("quote_icon").style.color = "#001d3d";
    document.getElementById("quote_text").style.fontFamily = "Tiro Tamil";
    document.getElementById("quote_text").style.fontWeight = "serif";
}
function pink() {
    document.getElementById("quotes").style.backgroundColor = "#ea9ab2";
    document.getElementById("quotes").style.borderColor = "#47126b";
    document.getElementById("quote_text").style.color = "#9e0059";
    document.getElementById("quote_author").style.color = "#9e0059";
    document.getElementById("quote_icon").style.color = "#9e0059";
    document.getElementById("quote_text").style.fontFamily = "Ubuntu";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}


const converterinput = document.getElementById("converter_input");
converterinput.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        convert();
    }
});
function convert(){
    var input = document.getElementById("converter_input").value;
    var unit = document.getElementById("converter_unit").value;
    if (unit == "lbtokg"){
        var output = input * 0.45359;
        document.getElementById("converter_result").innerHTML = output + " KG";
    }
    else{
        var output = input * 2.20462;
        document.getElementById("converter_result").innerHTML = output + " LB";
    }
}

const calculatorinput = document.getElementById("calc-value");
function calc() {
    var calcvalue = document.getElementById("calc-value").value;
    calcvalue = calcvalue.replace(/\s+/g, '')
    calculateArray = calcvalue.split(',');
    calculateArray = calculateArray.filter(n => n);
    Max();
    Min();
    Sum();
    Reverse();
    setTimeout(calc, 100);
}
function Max() {
    var maxvalue = Math.max.apply(null, calculateArray);
    if (maxvalue == "-Infinity") maxvalue = 0;
    document.getElementById("max").innerHTML = maxvalue;
}
function Min() {
    var minvalue = Math.min.apply(null, calculateArray);
    if (minvalue == "Infinity") minvalue = 0;
    document.getElementById("min").innerHTML = minvalue;
}
function Sum() {
    var sum = 0;
    for (var i = 0; i < calculateArray.length; i++) {
        sum += parseFloat(calculateArray[i]);
    }
    document.getElementById("sum").innerHTML = sum;
    var average = sum / calculateArray.length;
    if (isNaN(average)) average = 0;
    document.getElementById("average").innerHTML = average;
}
function Reverse() {
    calculateArray.reverse();
    for (var i = 0; i < calculateArray.length; i++) {
        calculateArray[i] = ` ${calculateArray[i]}`;
    }
    document.getElementById("reverse").innerHTML = calculateArray;
}

// Magic Text Functions
function cleartext() {
    document.getElementById("magic-input").value = "";
}
function capitalizetext() {
    var magicinput = document.getElementById("magic-input").value;
    if (document.getElementById("capitalize-button").value == "NO"){
        document.getElementById("magic-input").value = magicinput.toUpperCase();
        document.getElementById("capitalize-button").value = "YES";
    } else {
        document.getElementById("magic-input").value = magicinput.toLowerCase();
        document.getElementById("capitalize-button").value = "NO";
    }
}
function sortLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    magicArray.sort();
    document.getElementById("magic-input").value = magicArray.join("\n");
}
function reverseLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    magicArray.reverse();
    document.getElementById("magic-input").value = magicArray.join("\n");
}
function stripBlank() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = magicArray.filter(line => line.trim() !== "").join("\n");
    document.getElementById("magic-input").value = newmagicinput;
}
function addLineNo() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = magicArray.map((line, index) => `${index + 1}. ${line}`).join("\n");
    document.getElementById("magic-input").value = newmagicinput;
}
function shuffleLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    magicArray.shuffle();
    document.getElementById("magic-input").value = magicArray.join("\n");
}
// Quote Box Functionality
let quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "- Steve Jobs"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "- Albert Einstein"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "- Nelson Mandela"
    },
    {
        text: "The best way to predict your future is to create it.",
        author: "- Abraham Lincoln"
    }
];

function fetchQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote_text").innerHTML = quotes[randomIndex].text;
    document.getElementById("quote_author").innerHTML = quotes[randomIndex].author;
}

function red() {
    document.body.style.backgroundColor = "#f28d8d";
}

function blue() {
    document.body.style.backgroundColor = "#89c4f4";
}

function yellow() {
    document.body.style.backgroundColor = "#f7c455";
}

function pink() {
    document.body.style.backgroundColor = "#f4a1d9";
}

// Hero Converter Functionality
function convert() {
    let input = document.getElementById("converter_input").value;
    let unit = document.getElementById("converter_unit").value;
    let result;

    if (unit === "lbtokg") {
        result = (input * 0.453592).toFixed(2);
        document.getElementById("converter_result").innerHTML = `${input} LB = ${result} KG`;
    } else if (unit === "kgtolb") {
        result = (input / 0.453592).toFixed(2);
        document.getElementById("converter_result").innerHTML = `${input} KG = ${result} LB`;
    }
}

// Calculator Functionality
function calc() {
    document.getElementById("calc-value").value = '';
    document.getElementById("max").innerHTML = "0";
    document.getElementById("min").innerHTML = "0";
    document.getElementById("sum").innerHTML = "0";
    document.getElementById("average").innerHTML = "0";
    document.getElementById("reverse").innerHTML = "";
}

document.getElementById("calc-value").addEventListener("input", function() {
    let values = document.getElementById("calc-value").value.split(",").map(Number);
    if (values.length > 0) {
        let max = Math.max(...values);
        let min = Math.min(...values);
        let sum = values.reduce((a, b) => a + b, 0);
        let average = (sum / values.length).toFixed(2);
        let reverse = values.reverse().join(", ");
        
        document.getElementById("max").innerHTML = max;
        document.getElementById("min").innerHTML = min;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
        document.getElementById("reverse").innerHTML = reverse;
    }
});

// Magic Box Functionality
function cleartext() {
    document.getElementById("magic-input").value = '';
}

function capitalizetext() {
    let inputText = document.getElementById("magic-input").value;
    document.getElementById("magic-input").value = inputText.toUpperCase();
}

function sortLines() {
    let inputText = document.getElementById("magic-input").value;
    let lines = inputText.split("\n").sort();
    document.getElementById("magic-input").value = lines.join("\n");
}

function reverseLines() {
    let inputText = document.getElementById("magic-input").value;
    let lines = inputText.split("\n").reverse();
    document.getElementById("magic-input").value = lines.join("\n");
}

function stripBlank() {
    let inputText = document.getElementById("magic-input").value;
    let lines = inputText.split("\n").filter(line => line.trim() !== "");
    document.getElementById("magic-input").value = lines.join("\n");
}

function addLineNo() {
    let inputText = document.getElementById("magic-input").value;
    let lines = inputText.split("\n");
    for (let i = 0; i < lines.length; i++) {
        lines[i] = `${i + 1}. ${lines[i]}`;
    }
    document.getElementById("magic-input").value = lines.join("\n");
}

function shuffleLines() {
    let inputText = document.getElementById("magic-input").value;
    let lines = inputText.split("\n");
    lines = lines.sort(() => Math.random() - 0.5);
    document.getElementById("magic-input").value = lines.join("\n");
}

// Page Information
window.onload = function() {
    document.getElementById("pagelocation").innerHTML = window.location.href;
    document.getElementById("lastmod").innerHTML = document.lastModified;
};