export default function fetchQuote() {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => res.json())
    .then(([json]) => {
      return {
        quote: json.quote,
        character: json.character,
        image: json.image
      };
    });
}
