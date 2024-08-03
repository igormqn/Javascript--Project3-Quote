let newQuoteButton = document.querySelector('#new-quote');
let quoteElement = document.querySelector('#quote');
let authorElement = document.querySelector('#author');

let lastQuoteIndex = 0;
let randomIndex = 0;
let quotes = [
  ["Life is a mystery to be lived, not a problem to be solved.", "Gandhi"],
  ["The greatest risk is not taking any risk.", "Mark Zuckerberg"],
  ["Earn your leadership every day.", "Michael Jordan"],
  ["Be the change you wish to see in the world.", "Gandhi"],
  ["Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "Mark Twain"],
  ["Only those who will risk going too far can possibly find out how far one can go.", "T.S. Eliot"],
  ["Success is falling seven times, getting up eight.", "Japanese Proverb"],
  ["In twenty years you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "Mark Twain"],
  ["If you wait to do everything until you're sure it's right, you'll probably never do much of anything.", "Win Borden"],
  ["If you want to make your dreams come true, the first thing you have to do is wake up.", "J.M. Power"],
  ["Dedicate yourself to doing everything you can to help others get what they want, and you will find that it is the key to success.", "Brian Sher"],
  ["If you think you are too small to make a difference, try sleeping with a mosquito.", "Dalai Lama"],
  ["Don’t judge each day by the harvest you reap but by the seeds that you plant.", "Robert Louis Stevenson"],
  ["Action is the foundational key to all success.", "Pablo Picasso"],
  ["Success is walking from failure to failure with no loss of enthusiasm.", "Winston Churchill"],
  ["Your future is created by what you do today, not tomorrow.", "Robert T. Kiyosaki"],
  ["Don't be discouraged. It's often the last key in the bunch that opens the lock.", "Unknown"],
  ["To earn a living, learn at school. To earn a fortune, learn by yourself.", "Brian Tracy"],
  ["Winners find a way, losers find an excuse.", "Franklin D. Roosevelt"],
  ["You are never too old to set another goal or to dream a new dream.", "C.S. Lewis"],
  ["A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.", "Winston Churchill"]
];

// Function to generate a random number
function generateRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

newQuoteButton.addEventListener('click', () => {
  do {
    randomIndex = generateRandomNumber(quotes.length);
  } while (randomIndex == lastQuoteIndex)
    
  quoteElement.textContent = quotes[randomIndex][0];
  authorElement.textContent = quotes[randomIndex][1];
  lastQuoteIndex = randomIndex;
});
