"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { useEffect, useRef } from "react";

function Pagination({
  metadata,
}: {
  metadata: {
    page: number;
    count: number;
    length: number;
    next: number;
    previous: number;
  };
}) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const container = useRef<HTMLElement | null>(null);

  useEffect(() => {
    container.current = document.getElementById("properties") ?? document.getElementById("compounds");
  }, []);
  function navigate(page: number) {
    // Set the page query parameter in the link equal to the page's value
    const params = new URLSearchParams(searchParams);
    params.set("page", `${page}`);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
    if (container.current) {
      window.scrollTo(0, container.current.offsetTop - 250);
    }
  }

  if (metadata.length < 1) return null;

  return (
    <div className="flex items-center gap-6 mt-8 justify-center md:justify-start">
      <span className="hidden md:block h-px bg-gray-300 dark:bg-zinc-700 min-w-[1rem] flex-grow"></span>
      <ul className="flex gap-1">
        {/* The "Previous" button */}
        <li>
          <button
            className={`focus px-1 md:px-3 h-full flex items-center justify-center transition-colors hover:bg-gray-500 ${
              metadata.page === 1
                ? "bg-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-700 opacity-75"
                : "bg-zinc-700 text-slate-50"
            } disabled:!cursor-not-allowed`}
            disabled={metadata.page === 1}
            onClick={() => {
              if (container.current) {
                window.scrollTo(0, container.current.offsetTop - 250);
              }
              navigate(metadata.page - 1);
            }}
          >
            <span>
              <RiArrowDropLeftLine className="md:hidden text-2xl" />
            </span>
            <span className="hidden md:block">Previous</span>
          </button>
        </li>
        {/* Generate the buttons preceding the exisiting page */}
        {/* If we're not in page No.1 and we haven't yet reached page 4, generate all buttons from 1 to 3 */}
        {metadata.page > 1 && metadata.page < 4 ? (
          Array.from({ length: metadata.page - 1 }, (_, i) => i + 1).map((i) => (
            <li key={i}>
              <button
                onClick={() => navigate(i)}
                className="focus w-8 h-8 flex items-center justify-center bg-zinc-300 text-zinc-700 transition-colors hover:bg-gray-500 hover:text-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-gray-500"
              >
                {i}
              </button>
            </li>
          ))
        ) : metadata.page >= 4 ? (
          <>
            {/* else if we passed the page number 4, only generate page No.1 buttons, followed by a "..." disabled button,
              then another button for the direct previous page to the current page
           */}
            <li>
              <button
                onClick={() => navigate(1)}
                className="focus w-8 h-8 flex items-center justify-center bg-zinc-300 text-zinc-700 transition-colors hover:bg-gray-500 hover:text-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-gray-500"
              >
                1
              </button>
            </li>
            <li>
              <button
                disabled
                className="w-4 md:w-8 h-8 text-xs md:text-base flex items-center justify-center bg-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-700 opacity-75"
              >
                ...
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(metadata.previous)}
                className="focus w-8 h-8 flex items-center justify-center bg-zinc-300 text-zinc-700 transition-colors hover:bg-gray-500 hover:text-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-gray-500"
              >
                {metadata.previous}
              </button>
            </li>
          </>
        ) : null}
        {/* The "Current page" button */}
        <li>
          <button
            className="w-8 h-8 flex items-center justify-center font-semibold bg-zinc-700 text-slate-50 pointer-events-none dark:bg-zinc-300 dark:text-zinc-900"
            disabled
          >
            {metadata.page}
          </button>
        </li>
        {/* Generate the buttons succeeding the exisiting page */}
        {/* If we're not in final page and there still only 3 pages left, generate all buttons from next page to the last */}
        {metadata.page !== metadata.length && metadata.length - metadata.page < 4 ? (
          Array.from({ length: metadata.length - metadata.page }, (_, i) => metadata.page + i + 1).map((i) => (
            <li key={i}>
              <button
                className="focus w-8 h-8 flex items-center justify-center bg-zinc-300 text-zinc-700 transition-colors hover:bg-gray-500 hover:text-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-gray-500"
                onClick={() => navigate(i)}
              >
                {i}
              </button>
            </li>
          ))
        ) : metadata.length - metadata.page >= 4 ? (
          <>
            {/* else if there are more than 3 pages left, generate only the next page's button followed by the disabled "..." button,
              and finally the last page's button
          */}
            <li>
              <button
                onClick={() => navigate(metadata.next)}
                className="focus w-8 h-8 flex items-center justify-center bg-zinc-300 text-zinc-700 transition-colors hover:bg-gray-500 hover:text-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-gray-500"
              >
                {metadata.next}
              </button>
            </li>
            <li>
              <button
                disabled
                className="w-4 md:w-8 h-8 text-xs md:text-base flex items-center justify-center bg-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-700 opacity-75"
              >
                ...
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate(metadata.length)}
                className="focus w-8 h-8 flex items-center justify-center bg-zinc-300 text-zinc-700 transition-colors hover:bg-gray-500 hover:text-white dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-gray-500"
              >
                {metadata.length}
              </button>
            </li>
          </>
        ) : null}
        {/* The "Next" button */}
        <li>
          <button
            className={`focus px-1 md:px-3 h-full flex items-center justify-center transition-colors hover:bg-gray-500 ${
              metadata.page === metadata.length
                ? "bg-zinc-200 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-700 opacity-75"
                : "bg-zinc-700 text-slate-50"
            } disabled:!cursor-not-allowed`}
            disabled={metadata.page === metadata.length}
            onClick={() => {
              if (container.current) {
                window.scrollTo(0, container.current.offsetTop - 250);
              }
              navigate(metadata.page + 1);
            }}
          >
            <span>
              <RiArrowDropRightLine className="md:hidden text-2xl" />
            </span>
            <span className="hidden md:block">Next</span>
          </button>
        </li>
      </ul>
      <span className="hidden md:block h-px bg-gray-300 dark:bg-zinc-700 min-w-[1rem] flex-grow"></span>
    </div>
  );
}

export default Pagination;
