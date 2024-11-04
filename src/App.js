import React, { useEffect, useState} from "react";
import "./style.css"
import '@fortawesome/fontawesome-free/css/all.min.css'


function App () {
    const [quote, setQuote] = useState({text: "", author: ""})
    const [encodedQuote, setEncodedQuote] = useState("")
    const quotes = [{text: "The journey of a thousand miles begins with one step.", author: "Lao Tzu"},
        { text:"Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll"},
        { text:"The best way to predict the future is to create it.", author: "Peter Drucker"},
        { text:"Whether you think you can or think you can’t, you’re right.", author: "Henry Ford"},
        { text:"What we think, we become.", author: "Buddha"},
        { text:"Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
        { text:"Believe you can and you’re halfway there.", author: "Theodore Roosevelt"},
        { text:"Everything you can imagine is real.", author: "Pablo Picasso"},
        { text:"Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama"},
        { text:"Everything has beauty, but not everyone can see.", author: "Confucius"},
        { text:"A person who never made a mistake never tried anything new.", author: "Albert Einstein"},
        { text:"If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington"},
        { text:"It does not matter how slowly you go as long as you do not stop." ,author:"Confucius"},
        { text:"Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
            author: "Jesus"},
        { text:"We become what we think about.",author: "Earl Nightingale"},
        { text:"First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end." ,
            author: "Aristotle"},
        { text:"What you do today can improve all your tomorrows.", author: "Ralph Marston" },
        { text:"Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
        { text:"Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
        { text:"The secret of getting ahead is getting started.", author: "Mark Twain" },
        { text:"Only a life lived for others is a life worthwhile.", author: "Albert Einstein" },
        { text:"Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
        { text:"Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { text:"Don’t wish it were easier; wish you were better.", author: "Jim Rohn" },
        { text:"Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
        { text:"The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
        { text:"Every moment is a fresh beginning.", author: "T.S. Eliot" },
        { text:"Happiness is not by chance, but by choice.", author: "Jim Rohn" },
        { text:"Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
        { text:"To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
        { text:"A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
        { text:"It is not the mountain we conquer but ourselves.", author: "Edmund Hillary" },
        { text:"It always seems impossible until it's done.", author: "Nelson Mandela" },
        { text:"Don't let yesterday take up too much of today.", author: "Will Rogers" },
        { text:"You can’t fall if you don’t climb. But there’s no joy in living your whole life on the ground.",author:"Unknown"},
        { text:"Teach thy tongue to say, “I do not know,” and thous shalt progress.",author:"Maimonides"},
        { text:"The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",author:"Jesse Owen"},
        { text:"I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",author:"Michael Jordan"},
        { text:"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.",author:" Sheryl Sandberg"},
        { text:"We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light." ,author:"Plato"},
        { text:"When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",author:" Helen Keller"},
        { text:"Either you run the day, or the day runs you.",author: "Jim Rohn"},
        { text:"Start where you are. Use what you have. Do what you can.",author: " Arthur Ashe"},
        { text:"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it",author: "Henry Ford"},
        { text:"Change your thoughts and you change your world.",author: "Norman Vincent Peale"},
        { text:"Definiteness of purpose is the starting point of all achievement.",author: "W. Clement Stone"},
        { text:"Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",author: "Jamie Paolinetti"},
        { text:"Your time is limited, so don’t waste it living someone else’s life." ,author: "Steve Jobs"},
        { text:"You can never cross the ocean until you have the courage to lose sight of the shore.",author: "Christopher Columbus"},
        { text:"Happiness is not something readymade. It comes from your own actions.",author: " Dalai Lama"},
        { text:"If the wind will not serve, take to the oars." ,author: "Latin Proverb"},
        { text:"I am not a product of my circumstances. I am a product of my decisions.",author: "Stephen Covey"},
        { text:"The two most important days in your life are the day you are born and the day you find out why.",author: " Mark Twain"},
        { text:"If you look at what you have in life, you’ll always have more. ",author:"Oprah Winfrey"},
        { text:"I have not failed. I’ve just found 10,000 ways that won’t work.",author:"Thomas A. Edison"},
        { text:"Live each day as if your life had just begun.",author:"Johann Wolfgang Von Goethe"},
        { text:"You can waste your lives drawing lines. Or you can live your life crossing them.",author:"Shonda Rhimes"},
        { text:"The only impossible journey is the one you never begin." ,author:"Tony Robbins"},
        { text:"Insanity is doing the same thing over and over again and expecting different results.",author:"Albert Einstein"},
        { text:"Life would be tragic if it weren’t funny.",author:"Stephen Hawking"},
        { text:"Knowing yourself is the beginning of all wisdom.",author:"Aristotle"},
        { text:"Life is not a problem to be solved, but a reality to be experienced.",author:"Søren Kierkegaard"},
        { text:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",author:"Bil Keane"},
        { text:"When we strive to become better than we are, everything around us becomes better too.",author:"Paolo Coelho"},
        { text:"Turn your wounds into wisdom.",author:"Oprah Winfrey"},
        { text:"There is nothing impossible to him who will try.",author:"Alexander the Great"},
        { text:"Arguing with a fool proves there are two.",author:"Doris Smith"},
        { text:"You cannot change what you are, only what you do.",author:"Philip Pullman"},
        { text:"Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.",author:"Albert Einstein"},
        { text:"We have two ears and one mouth, so we should listen more than we speak.",author:"Zeno of Citium"},
        { text:"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.",author:"William Blake"},
        { text:"Being entirely honest with oneself is a good exercise.",author:"Sigmund Freud"},
        { text:"To be, or not to be, that is the question.",author:"William Shakespeare"},
        { text:"A great man is hard on himself; a small man is hard on others.",author:"Confucius" },
        { text:"The most persevering becomes the most talented.",author:" Maxime Lagacé"},
        { text:"They always say time changes things, but you actually have to change them yourself.",author:"Andy Warhol"},
        { text:"Life is a mountain. Your goal is to find your path, not to reach the top.",author:"Maxime Lagacé"},
        { text:"Life is nothing but a mirror of your consistent thoughts.",author:"Tony Robbins"},
        { text:"If you want to live a happy life, tie it to a goal, not to people or things.",author:" Albert Einstein"},
        { text:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking. Don’t let the noise of others’ opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.",author:"Steve Jobs"},
        { text:"Life is about moments; don’t wait for them, create them.",author:" Tony Robbins"},
        { text:"The purpose of life is to believe, to hope, and to strive.",author:"Indira Gandhi"},
        { text: "To love and be loved is to feel the sun from both sides.",author:"David Viscott" },
        { text:"You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner" },
        { text:"You have power over your mind—not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
        { text:"What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  
    ];

    const randomQuotex = () => {
        if (quotes.length > 0) {
            const MathRandom = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(MathRandom);
            setEncodedQuote(encodeURIComponent(`“${MathRandom.text.replace(".", "")} —${MathRandom.author}`));
            }};



    useEffect(() => {
        randomQuotex();
        // eslint-disable-next-line
    }, []);



    return (
        <div id="name">
            <div id="quote-box">
                <p id="text">{quote.text}</p>
                <p id="author">{quote.author}</p>
                <button id="new-quote" onClick={randomQuotex}>New quote</button>
                <div id="container">
                    <a href={"https://twitter.com/intent/tweet?text=" + encodedQuote} id="tweet-quote"
                       target="_blank" rel="noopener noreferrer"> <i id="tweet-icon" className="fab fa-twitter"></i></a>
                </div>

            </div>
            <p>by 60794N</p>
        </div>
    );

}


        export default App;