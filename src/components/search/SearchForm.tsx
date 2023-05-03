import { FiSearch } from "react-icons/fi";

type Props = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ query, setQuery }: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const url = new URL(window.location.href);
        url.searchParams.set("q", query);
        window.history.replaceState(null, "", url.toString());
      }}
      className="flex w-full max-w-lg"
    >
      <input
        className="w-full px-4 py-3 bg-white focus:outline-none hover:shadow-none focus:shadow-none transition-shadow rounded-l appearance-none border-2 border-arg-muted focus-visible:border-arg-gold peer placeholder:text-arg-muted shadow"
        type="search"
        name="search"
        autoFocus
        placeholder="Enter Search Term…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <label htmlFor="search-widget-input" className="sr-only">
        Enter a search term
      </label>
      <button
        type="submit"
        className="bg-arg-muted peer-focus:bg-arg-gold shadow-md text-xs px-4 rounded-r text-arg-white uppercase focus:outline-none hover:shadow-none focus:shadow-none transition-shadow focus-visible:ring-4 ring-arg-dark cursor-pointer flex items-center gap-1"
        aria-label="Submit search"
      >
        <FiSearch className="w-6 h-6" />
      </button>
    </form>
  );
};
export default SearchForm;
