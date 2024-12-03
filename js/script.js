


const quotes = [
    { quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
    { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King, Jr." },
    { quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
    { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss " },
    { quote: "So many books, so little time.", author: "Frank Zappa" },
    { quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },

  ];

  var lastIndex = -1;

  function generateQuote() {
    var randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);
  
    lastIndex = randomIndex; 
    
    const randomQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = randomQuote.quote;
    document.getElementById("author").textContent = `- ${randomQuote.author}`;
  }





