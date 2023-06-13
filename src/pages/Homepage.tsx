import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import CardList from "../components/CardList";
import LoadMore from "../components/LoadMore";
import { LoadingSpinner } from "../components/Loader";
import SearhBar from "../components/SearhBar";
import { getListOfData } from "../lib/services";
import { Response } from "../types";

function Homepage() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = useQuery<Response>({
    queryKey: ["characters", location.search || "", page],
    queryFn: () => {
      const endpoint = location.search
        ? location.search + `&page=${page}`
        : `?page=${page}`;
      console.log(endpoint);
      return getListOfData(`/api/character${endpoint}`);
    },
    keepPreviousData: true,
  });

  const characters = data?.results;

  return (
    <div className="space-y-5">
      <SearhBar setPage={setPage} />

      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : characters && characters.length > 0 ? (
          <CardList characters={characters} />
        ) : (
          <div>Nothing Found</div>
        )}
      </div>

      <div className="flex flex-wrap gap-5">
        {[...Array(data?.info.pages).keys()].map((x) => (
          <button
            onClick={() => setPage(x + 1)}
            className="rounded-lg bg-pink-600 px-4 py-2 text-white"
          >
            {x + 1}
          </button>
        ))}
      </div>

      <LoadMore
        setPage={setPage}
        totalPage={data?.info.pages || 1}
        isLoading={isLoading}
        isFetching={isFetching}
        page={page}
      />
    </div>
  );
}

export default Homepage;
