let quoteEl = document.getElementById("quote-text");
let citeEl = document.getElementById("cite");
let quotes = [
  {
    quote: `The purpose of our lives is to be happy.`,
    name: `Dalai Lama`,
  },
  {
    quote: `Life is what happens when you’re busy making other plans.`,
    name: `John Lennon`,
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    name: "Mae West",
  },
  {
    quote: "Get busy living or get busy dying.",
    name: "Stephen King",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    name: "Thomas A. Edison",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    name: "Albert Einstein",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    name: "Babe Ruth",
  },
  {
    quote:
      "Money and success don’t change people; they merely amplify what is already there.",
    name: "Will Smith",
  },
  {
    quote:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    name: "Steve Jobs",
  },
  {
    quote: "Not how long, but how well you have lived is the main thing.",
    name: "Seneca",
  },
  {
	quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
	name: "Dr. Seuss"
	},
	{
	quote: "This too, shall pass.",
	name: "Anonymous"
	},
	{
	quote: "Keep your eyes on the stars and your feet on the ground.",
	name: "Theodore Roosevelt"
	},
	{
	quote: "The only person you should try to be better than is the person you were yesterday.",
	name: "Anonymous"
	},
	{
	quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
	name: "Harvey Fierstein"
	},
	{
	quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
	name: "C.S. Lewis"
	},
	{
	quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it.",
	name: "Sador",
	},
	{
	quote:  "Life's too mysterious to take too serious.",
	name: "Mary Engelbreit"
	},
	{
	quote: "No one can make you feel inferior without your consent.",
	name: "Eleanor Roosevelt"
	},
	{
	quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
	name: "Albert Einstein"
	},
	{
	quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
	name: "Terry Pratchett" 
	},
	{
	quote: "There isn't a way things should be. There's just what happens, and what we do.",
	name: "Terry Pratchett"
	},
	{
	quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
	name: "Rocky Balboa"
	},
	{
	quote: "More fuck yeah, less fuck that.",
	name: "Anonymous"
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	name: "African proverb"
	},
	{
	quote: "It's OK to not be OK, as long as you don't stay that way.",
	name: "Anonymous"
	},
	{
	quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
	name: "Maya Angelou"
	},
	{
	quote: "Believe you can and you're halfway there.",
	name: "T. Roosevelt"
	},
	{
	quote: "May I never be complete. May I never be content. May I never be perfect.",
	name: "Chuck Palahniuk"
	},
	{
	quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
	name: "Marie Curie"
	},
	{

	quote: "Those who don't believe in magic will never find it.",
	name: "Roald Dahl"
	},
	{
	quote: "There is no elevator to success  you have to take the stairs.",
	name: "Anonymous"
	},
	{
	quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers.",
	name: "Jose Luis Borges"
	},
    {
        quote: "It does not do to dwell on dreams and forget to live.",
        name: "Albus Dumbledore"
        },
        {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        name: "George Carlin"
        },
        {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
        name: "Eleanor Roosevelt"
        },
        {
        quote: "Do not set yourself on fire in order to keep others warm.",
        name: "Anonymous"
        },
        {
        quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant.",
        name: "Doctor Who"
        },
        {
        quote: "It's supposed to be hard. If it were easy, everyone would do it.",
        name: "Jimmy Dugan"
        },
        {
        quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
        name: "Anonymous"
        },
        {
        quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
        name: "Anonymous"
        },
        {
        quote: "Never cowardly or cruel. Never give up, never give in.",
        name: "Doctor Who"
        },
        {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        name: "Ralph Waldo Emerson"
        },
        {
        quote: "In 20 years, you probably won't even remember this.",
        name: "Anonymous"
        },
        {
        quote: "Love all, trust a few, do wrong to none.",
        name: "William Shakespeare"
        },
        {
        quote: "Clear eyes, full hearts, can't lose.",
        name: "Dillon Panthers"
        },
        {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        name: "Aristotle"
        }
];

function generate() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomNum].quote;

  citeEl.textContent = quotes[randomNum].name;
}
