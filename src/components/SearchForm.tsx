import { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    return (window.location.href = `/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        className="block w-full max-w-xs py-2 px-4 rounded-md bg-transparent border-2 border-arg-gold focus:outline-arg-gold placeholder:text-arg-muted"
        type="search"
        name="search"
        placeholder="Enter Search Term…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
    </form>
  );
};
export default SearchForm;
