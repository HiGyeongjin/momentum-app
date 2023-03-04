const quotes = [
  {
    quote:
      "You do not write your life with words, you write it with actions. What you think is not important. It is only important what you do.",
    author: "unknown",
  },
  {
    quote:
      "You can't cross the sea merely by standing and staring at the water.",
    author: "Rabindranth Tagore",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "You can't control the direction of the wind, but you can adjust your sails.",
    author: "Jimmy Dean",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "To be the best, you must be able to handle the worst.",
    author: "unknown",
  },
  {
    quote: "Don't complain. Just do it.",
    author: "unknown",
  },
  {
    quote: "The discipline of desire is the background of character.",
    author: "John Locke",
  },
  {
    quote:
      "Most champions are built by punch-the-clock workouts rather than extraordinary efforts.",
    author: "Dan John",
  },
  {
    quote:
      "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    author: "Mary Anne Aradmacher",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
