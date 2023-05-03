import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import PostCard from "../PostCard";

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
          `/postSearch.json?q=${query}&limit=${numOfResults}`
        );
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      } catch (e) {
        console.error(e);
        return e;
      }
    },
  });
  console.log("🚀 ~ SearchResults ~ data:", data);

  if (query.length === 0) return null;
  if (status === "loading") return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section
      aria-label="Located Posts"
      className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 items-start"
    >
      {data && data.length > 0
        ? data.map((p) => <PostCard post={p.item} key={p.item.slug} />)
        : "No results found…"}
    </section>
  );
};
export default SearchResults;
