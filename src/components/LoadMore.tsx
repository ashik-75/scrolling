import { LoadingSpinner } from "./Loader";

function LoadMore({ setPage, totalPage, isFetching, isLoading, page }: any) {
  return totalPage === page ? null : (
    <div className="flex items-center justify-center">
      <button
        onClick={() =>
          setPage((prev: number) => (prev < totalPage ? prev + 1 : prev))
        }
        className="rounded-lg border border-zinc-400 px-4 py-2"
      >
        {!isLoading && isFetching ? <LoadingSpinner /> : "Load More"}
      </button>
    </div>
  );
}

export default LoadMore;
