import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const quotesData = [
  { id: 1, quote: "Your heart is the size of an ocean. Go find yourself in its hidden depths.", author: "Rumi" },
  { id: 2, quote: "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.", author: "Abdul Kalam" },
  { id: 3, quote: "Thinking is the capital, Enterprise is the way, Hard Work is the solution.", author: "Abdul Kalam" },
  { id: 4, quote: "If You Can'T Make It Good, At Least Make It Look Good.", author: "Bill Gates" },
  { id: 5, quote: "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.", author: "Rumi" },
  { id: 6, quote: "It is bad for a young man to sin; but it is worse for an old man to sin.", author: "Abu Bakr (R.A)" },
  { id: 7, quote: "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.", author: "Albert Einstein" },
  { id: 8, quote: "O man you are busy working for the world, and the world is busy trying to turn you out.", author: "Abu Bakr (R.A)" },
  { id: 9, quote: "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.", author: "Abdul Kalam" },
  { id: 10, quote: "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.", author: "Abraham Lincoln" },
];

export const Home = () => {
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    setDisplayedQuotes(quotesData.slice(0, 10));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className="h-2/5">
        <img src="https://img.freepik.com/free-photo/inspirational-words-collage_23-2150104539.jpg?t=st=1734679449~exp=1734683049~hmac=be0f5bfbba0c4f5d2f9a095257181ad048ce498ce1dfe1efda74049e775bdb02&w=1060" alt="img" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Quotes</h1>
        <div>
          {displayedQuotes.map((quote) => (
            <div
              key={quote.id}
              className="mb-4 p-4 border rounded-lg shadow-md"
              style={{
                backgroundColor: 'var(--background-color)', // Use CSS variable for background
                borderColor: 'var(--text-color)', // Use CSS variable for border color
              }}
            >
              <p className="font-semibold text-lg">{quote.quote}</p>
              <p className="text-gray-600 text-sm">- {quote.author}</p>
            </div>
          ))}
        </div>
        <Link to="/quote-id" className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          SearchById
        </Link>
      </div>
    </div>
  );
};

export default Home;