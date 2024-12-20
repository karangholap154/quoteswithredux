// src/pages/QuoteWithId.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getQuoteById } from "../slice/quoteSlice";
import { useNavigate } from "react-router-dom";

export const QuoteWithId = () => {
  const [id, setId] = useState("");
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = async () => {
    setError("");
    const result = await dispatch(getQuoteById(id));
    if (result.meta.requestStatus === "rejected") {
      setError("ID is not valid or out of range.");
      setQuote(null);
    } else {
      setQuote(result.payload);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Quote by ID</h1>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter Quote ID"
        className="border p-2 mb-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {quote && (
        <div className="mt-4">
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            "{quote.quote}" - {quote.author}
          </blockquote>
        </div>
      )}
    </div>
  );
};

export default QuoteWithId;