/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


//an array of quotes
var quotes = [
  {
    quote: 'Do not feel lonely, the entire Universe is inside you.',
    source: 'Rumi  ',
    ethnicity: 'Persian Poet'
  },
  {
    quote: 'Even after all this time, the sun never says to the earth, "You owe me."  Look what happens with a love like that.  It lights the whole sky.',
    source: 'Hafiz',
    citation: 'The Gift: Poems by Hafiz',
    year: '--14th Century',
    ethnicity: 'Persian Poet' 
  },
  {
    quote: 'The morning breeze has secrets to tell you. Do not go back to sleep.',
    source: 'Rumi',
    citation: 'Persian Mystic Poet',
    year: '--13th Century',
    ethnicity: 'Persian Poet'
  },
  { 
    quote: 'Where is the Door to God?  In the sound of a dog barking, in the ring of a hammer, in a drop of rain in the face of Everyone I see.',
    source: 'Hafiz  ',
    ethnicity: 'Persian Poet'
  },
  {
    quote: 'The wound is the place where the light enters you.',
    source: 'Rumi  ',
    ethnicity: 'Persian Poet'
  },
  {
    quote: 'Out beyond the ideas of wrong-doing and right-doing there is a field.  I will meet you there.',
    source: 'Rumi  ',
    ethnicity: 'Persian Poet'
  },
  {
    quote: 'And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.',
    source: 'Kahlil Gibran',
    citation: 'The Prophet',
    year: '--1923',
    ethnicity: 'Lebanese Poet'
  },
]

//an array of colors to be used to change the background color
var colors = [
  "PaleGoldenRod",
  "PaleTurquoise",
  "PowderBlue",
  "Thistle"
];

var timer;
var interval;

function getRandomQuote() {
  var randomNumberQuote = quotes[Math.floor( Math.random() * quotes.length)];
  return randomNumberQuote;
}

function getRandomColor() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

function autoRefresh() {
  clearInterval(interval);
  timer *= 20;
  interval = setInterval(autoRefresh, timer);
}
interval = setInterval(autoRefresh, timer);


function printQuote (){
  var displayQuote = getRandomQuote();
  var displayColor = getRandomColor();
  var startTimer = autoRefresh();
  var htmlQuote = '';

  if (displayQuote.citation === undefined || displayQuote.year === undefined) {
    htmlQuote += '<p class="quote">' + displayQuote.quote + '<p class="source">' + displayQuote.source;
    htmlQuote += '<span class="ethnicity">' + displayQuote.ethnicity + '</span>' + '</p>';
  } else {
    htmlQuote += '<p class="quote">' + displayQuote.quote;
    htmlQuote += '<p class="source">' + displayQuote.source;
    htmlQuote += '<span>' + displayQuote.ethnicity + '</span>';
    htmlQuote += '<span class="citation">' + displayQuote.citation + '</span>';
    htmlQuote += '<span class="year">' + displayQuote.year + '</span>' +'</p>';
  }

document.getElementById('quote-box').innerHTML = htmlQuote;
document.body.style.backgroundColor = displayColor;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
 
/***
 
    ${quote}  <span class="source">${source}<span> <span class="ethnicity">${ethnicity}<span> <span> class="citation">${citation}<span> <span> class="year">${year}<span></p>`
  } else {
 

counter = 20;
autoRefresh = function () {
  counter *=20;
  setTimeout(autoRefresh, counter);
}
setTimeout(autoRefresh, counter);


Create the `getRandomQuote` function to:
   - generate a random number 

   - use the random number to `return` a random quote object from the 
     `quotes` array.


//get a random quote by generating a random number and passing the quotes array through it
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
 /*
 
  document.getElementById('quote-box').innerHTML = htmlQuote;
  console.log();
}

printQuote();





  

//create a variable that initiates your html string
//using the template in the project instrucgtion, add the two default properties
//if there is a quote.citation property. add it to the string
//if there is a qutoe. year property, add it to the string
//close the string withj the necessary closing html tages
//set the inner html of the .quote-box to the complete html string
//console.log method to variables and values




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/
