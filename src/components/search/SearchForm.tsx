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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>
  );
};
export default SearchForm;
