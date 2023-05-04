import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// component imports
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
const queryClient = new QueryClient();

const SearchApp = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search).get("q");
    if (urlParams) {
      setQuery(urlParams);
      document.title = `Search results for "${urlParams}" | Speak Argentinian Spanish`;
    } else {
      document.title = `Search | Speak Argentinian Spanish`;
      setQuery("");
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query) {
      url.searchParams.set("q", query);
      window.history.replaceState(null, "", url.toString());
      document.title = `Search results for "${query}" | Speak Argentinian Spanish`;
    }
  }, [query]);

  return (
    <QueryClientProvider client={queryClient}>
      <SearchForm query={query} setQuery={setQuery} />
      <SearchResults query={query} />
    </QueryClientProvider>
  );
};
export default SearchApp;
