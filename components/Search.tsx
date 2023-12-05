"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex items-center gap-1 bg-white text-zinc-700 dark:bg-neutral-900 dark:text-neutral-100 rounded-md w-fit p-1">
      <IoIosSearch className="opacity-50" />
      <input
        type="search"
        placeholder="Search..."
        defaultValue={searchParams.get("query")?.toString() || ""}
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-transparent focus:outline-none text-sm"
      />
    </div>
  );
}
