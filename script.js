let apiQuotes = [];

// Get Quotes from API
async function getQuotes() {
	const apiURl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
	try {
		const response = await fetch(apiURl);
		apiQuotes = await response.json();
		console.log(apiQuotes[69]);
	} catch (error) {
		// Catch Error Here
	}
}

//On Load
getQuotes();
