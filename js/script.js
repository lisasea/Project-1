/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended: 
    - Add at least one `year` and/or `citation` property to at least one 
      quote object.
***/

var quotes = [
  {
    quote: 'Do not feel lonely, the entire Universe is inside you.',
    source: 'Rumi',
    citation: 'Persian Mystic Poet',
    year: '--13th Century'
  },
  {
    quote: 'Even after all this time, the sun never says to the earth, "You owe me."  Look what happens with a love like that.  It lights the whole sky.',
    source: 'Hafiz',
    citation: 'Persian Poet',
    year: '--14th Century' 
  },
  {
    quote: 'The morning breeze has secrets to tell you. Do not go back to sleep.',
    source: 'Rumi',
    citation: 'Persian Mystic Poet',
    year: '--13th Century'
  },
  { 
    quote: 'Where is the Door to God?  In the sound of a dog barking, in the ring of a hammer, in a drop of rain in the face of Everyone I see.',
    source: 'Hafiz',
    citation: 'Persian Poet',
    year: '--14th Century' 
  },
  {
    quote: 'The wound is the place where the light enters you.',
    source: 'Rumi',
    citation: 'Persian Mystic Poet',
    year: '--13th Century'
  },
  {
    quote: 'Out beryond the ideas of wrong-doing and right-doing there is a field.  I will meet you there.',
    source: 'Rumi',
    citation: 'Persian Mystic Poet',
    year: '--13th Century'
  },
  {
    quote: 'And forget not that the earth delights to feel your bare feet and the winds long to play with your hair.',
    source: 'Kahlil Gibran',
    citation: 'The Prophet',
    year: '--1923'
  },
]

console.log (quotes);
console.log (quotes);
console.log



//quotes [0]
  quotes[1]
  quotes[2]  etc

/***
  Create the `getRandomQuote` function to:
   - generate a random number 

   - use the random number to `return` a random quote object from the 
     `quotes` array.
***/

function getRandomQuote(lower, upper) {
  var array = Math.floor( Math.random() *  (upper - lower)) + lower;
  return random;
}
getRandomQuote();
getRandomQuote();
getRandomQuote();
getRandomQuote();

//alert ()


/***
  Create the `printQuote` function to: 
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to 
     create your HTML string.
   - use conditionals to make sure the optional properties exist before 
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote(); {

}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.