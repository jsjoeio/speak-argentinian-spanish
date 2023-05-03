import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export type ResultObj = {
  id: string;
  slug: string;
  body: string;
  collection: "blog";
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
  const [numOfResults, setNumOfResults] = useState(DEFAULT_NUM);
  const { status, error, data } = useQuery<SearchResult[]>({
    queryKey: ["search"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `/postSearch.json?q=${query}&limit=${DEFAULT_NUM}`
        );
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      } catch (e) {
        console.error(e);
        return e;
      }
    },
  });

  return (
    <section
      aria-label="Located Posts"
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 items-start"
    ></section>
  );
};
export default SearchResults;
