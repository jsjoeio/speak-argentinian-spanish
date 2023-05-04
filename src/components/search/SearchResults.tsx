import Fuse from "fuse.js";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import LoadingSpinner from "../ui/LoadingSpinner";

export type ResultObj = {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
  };
};

type SearchResult = {
  item: ResultObj;
  refIndex: number;
  score: number;
};

const DEFAULT_NUM = 5;

const SearchResults = ({ query }: { query: string }) => {
  const [matchingResults, setMatchingResults] = useState<SearchResult[]>([]);
  const [numOfResults, setNumOfResults] = useState(DEFAULT_NUM);
  const { status, error, data } = useQuery<SearchResult[]>({
    queryKey: ["search"],
    queryFn: async () => {
      try {
        const res = await fetch(`/postSearch.json`);
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      } catch (e) {
        console.error(e);
        return e;
      }
    },
  });

  const fuse = new Fuse(data, {
    includeScore: true,
    shouldSort: true,
    threshold: 0.5,
    keys: [
      {
        name: "data.title",
        weight: 2,
      },
      {
        name: "data.description",
        weight: 1,
      },
    ],
  });

  useEffect(() => {
    if (data) {
      const results = fuse.search(query);
      setMatchingResults(results);
    }
  }, [query, data, numOfResults]);

  if (query.length === 0) return null;
  if (status === "loading") return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section aria-label="Located Posts" className="grid gap-8 items-start">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 item-start">
        {matchingResults.length > 0
          ? matchingResults
              .slice(0, numOfResults)
              .map((p) => <PostCard key={p.item.slug} post={p.item} />)
          : "No results found…"}
      </div>
      {matchingResults.length > numOfResults ? (
        <button
          onClick={() => setNumOfResults((num) => (num += DEFAULT_NUM))}
          className="capitalize text-center bg-arg-gold text-arg-white font-bold w-fit px-6 py-2 rounded-md transition-colors hover:bg-arg-muted focus:outline-none ring-offset-arg-white  focus-visible:ring-offset-2 focus-visible:ring-arg-gold focus-visible:ring-4 ring-offset-2"
        >
          Show more results
        </button>
      ) : null}
    </section>
  );
};
export default SearchResults;
