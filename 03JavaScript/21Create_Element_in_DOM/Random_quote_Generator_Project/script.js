function quoteGenerator(){
    const quotes = [
  "The quietest decisions often change the loudest parts of life.",
  "You don’t need a new path every day; sometimes you just need to keep walking.",
  "A sharp mind is built from curious questions, not perfect answers.",
  "Storms don’t last forever, but strong roots do.",
  "Discipline is remembering what you wanted long after the excitement fades.",
  "Small improvements become powerful when repeated consistently.",
  "The future usually arrives disguised as ordinary work.",
  "Confidence grows faster through action than through waiting.",
  "A good conversation can change the direction of an entire week.",
  "Creativity begins where fear of being wrong ends.",
  "Patience is not standing still; it is moving without panic.",
  "Sometimes the bravest thing you can do is start before you feel ready.",
  "The best ideas often appear during moments of silence.",
  "Success is rarely sudden; it is usually accumulated.",
  "Your habits introduce you before your words do.",
  "Even slow progress is proof that you refused to quit.",
  "People remember how you made them feel more than what you said.",
  "A calm mind notices opportunities that a rushed mind ignores.",
  "Learning becomes powerful when it turns into practice.",
  "Not every chapter feels meaningful while you are living it."
];

  let text=document.querySelector("#quote");
  let index=Math.floor(Math.random()*quotes.length);
  text.innerHTML=quotes[index];

}

setInterval(quoteGenerator,3000);

