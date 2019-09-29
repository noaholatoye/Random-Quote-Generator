/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// 6 random quotes
let quotes = [
	{
		quote:
			"Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
		source: "Princess Diana",
		citation: "Brainy Quote",
		year: 1961,
		tags: "Kindness, Reward",
		background: "#207561"
	},
	{
		quote: "It does not matter how slowly you go as long as you do not stop.",
		source: "Confucius",
		tags: "",
		background: "#589167"
	},
	{
		quote:
			"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
		source: "Bradley Whitford",
		citation: "Brainy Quote",
		year: 1959,
		tags: "",
		background: "#a0cc78"
	},
	{
		quote:
			"Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.",
		source: "Og Mandino",
		tags: "Care, Love",
		background: "#5a3d5c"
	},
	{
		quote:
			"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
		source: "Norman Vincent Peale",
		citation: "Brainy Quote",
		year: 1898,
		tags: "",
		background: "#36b55c"
	},
	{
		quote:
			"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
		source: "Patrick McKenzie",
		citation: "Twitter",
		year: 2016,
		tags: "Programming, Developers",
		background: "#dc5353"
	}
];

// Get random quote
getRandomQuote = array => {
	let randomNum = Math.floor(Math.random() * array.length);
	return array[randomNum];
};

// Print quote
printQuote = () => {
	// get random number
	let randomNum = getRandomQuote(quotes);
	let txt = "";
	let contentHTML = document.getElementById("quote-box");
	// check if citation and year is undefined
	if (randomNum.citation == undefined || randomNum.year == undefined) {
		txt = `<p class="quote">${randomNum.quote}</p>
    <p class="source">${randomNum.source}</p>`;
		// contentHTML.innerHTML = txt;
		// body.style.color = quotes[randomNum].background;
	} else if (randomNum.tags == undefined) {
		txt = `<p class="quote">${randomNum.quote}</p>
    <p class="source">${randomNum.source}<span class="citation">${randomNum.citation}</span><span class="year">${randomNum.year}</span></p>`;
	} else {
		txt = `<p class="quote">${randomNum.quote}</p>
    <p class="source">${randomNum.source}<span class="citation">${randomNum.citation}</span><span class="year">${randomNum.year}</span><span class="tags"> -Tags: ${randomNum.tags}</span></p>`;
	}
	// print and change background color
	contentHTML.innerHTML = txt;
	document.body.style.backgroundColor = randomNum.background;
};

printQuote();

// set 20 seconds interval
setInterval(printQuote, 20000);

//Btn click to change quote
document
	.getElementById("loadQuote")
	.addEventListener("click", printQuote, false);
