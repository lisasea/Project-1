/******************************************
Treehouse Techdegree: Lisa Carbonell
FSJS project 1 - A Random Quote Generator
Aiming for Exceeds Expectation Grade
******************************************/

// an array of quotes with various properties
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
    ethnicity: ' Persian Poet' 
  },
  {
    quote: 'The morning breeze has secrets to tell you. Do not go back to sleep.',
    source: 'Rumi',
    citation: 'Persian Mystic Poet',
    year: '--13th Century',
    ethnicity: ' Persian Poet'
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
    ethnicity: ' Lebanese Poet'
  },
]

//an array of colors to be used to change the background color
var colors = [
  "PaleGoldenRod",
  "PaleTurquoise",
  "PowderBlue",
  "Thistle"
];

// a function that gets a random quote by generating a random number and passing the array of quotes above through it to get a random quote
function getRandomQuote() {
  var randomNumberQuote = quotes[Math.floor( Math.random() * quotes.length)];
  return randomNumberQuote;
}

// a function that gets a random color by generating a random number and passing the array of colors above through it to get a random color
function getRandomColor() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

// a function that gets the random quote and random background color and filters through the array of quotes properties creating an html string 
// and sets a 20 second interval to change quote if Show Another Quote button is not pushed
function printQuote (){
  var displayQuote = getRandomQuote();
  var displayColor = getRandomColor();
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
  setInterval(printQuote, 20000);
}
// when "Show another quote" button is clicked the event listener is triggerd calling the printQuote function above
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//sets a 20 second interval to change quote if Show Another Quote button is not pushed
setInterval(printQuote, 20000);