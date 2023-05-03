import { useState } from "react";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ query, setQuery }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = `/search/?q=${query}`;
      }}
    >
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
