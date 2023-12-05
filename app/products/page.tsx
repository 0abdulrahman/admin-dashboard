import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdOpen } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function page() {
  return (
    <>
      <section className="mt-6 px-4 py-2 rounded-md bg-zinc-50 dark:bg-neutral-800">
        <div className="flex items-center justify-between border-b pb-2">
          <Search />
          <Button size="sm" asChild>
            <Link href="/products/new">Add New</Link>
          </Button>
        </div>
        <table className="text-sm w-full mt-4">
          <thead>
            <tr className="text-left">
              <th className="p-2">Title</th>
              <th className="p-2">Description</th>
              <th className="p-2">Price</th>
              <th className="p-2">Created At</th>
              <th className="p-2">Stock</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700">
              <td className="p-2">iPhone 15</td>
              <td className="p-2">Some description</td>
              <td className="p-2">$999</td>
              <td className="p-2">13/01/2022</td>
              <td className="p-2">72</td>
              <td className="p-2">
                <div className="flex gap-1">
                  <Button size="sm" variant="default" className="p-2 text-lg">
                    <IoMdOpen />
                  </Button>
                  <Button size="sm" variant="destructive" className="p-2 text-lg">
                    <MdDelete />
                  </Button>
                </div>
              </td>
            </tr>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700">
              <td className="p-2">iPhone 15</td>
              <td className="p-2">Some description</td>
              <td className="p-2">$999</td>
              <td className="p-2">13/01/2022</td>
              <td className="p-2">72</td>
              <td className="p-2">
                <div className="flex gap-1">
                  <Button size="sm" variant="default" className="p-2 text-lg">
                    <IoMdOpen />
                  </Button>
                  <Button size="sm" variant="destructive" className="p-2 text-lg">
                    <MdDelete />
                  </Button>
                </div>
              </td>
            </tr>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700">
              <td className="p-2">iPhone 15</td>
              <td className="p-2">Some description</td>
              <td className="p-2">$999</td>
              <td className="p-2">13/01/2022</td>
              <td className="p-2">72</td>
              <td className="p-2">
                <div className="flex gap-1">
                  <Button size="sm" variant="default" className="p-2 text-lg">
                    <IoMdOpen />
                  </Button>
                  <Button size="sm" variant="destructive" className="p-2 text-lg">
                    <MdDelete />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* <Pagination metadata={{ page: 2, count: 25, length: 10, next: 3, previous: 1 }} /> */}
    </>
  );
}
