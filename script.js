let firstCard;
let secondCard;


function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// Example usage to get a random number between 2 and 11
const randomNumber = getRandomIntInclusive(2, 11);
console.log(randomNumber);