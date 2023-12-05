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
            <Link href="/users/new">Add New</Link>
          </Button>
        </div>
        <table className="text-sm w-full mt-4">
          <thead>
            <tr className="text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Created at</th>
              <th className="p-2">Role</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700">
              <td className="p-2">Hello</td>
              <td className="p-2">hello@gmail.com</td>
              <td className="p-2">Oct 30 2023</td>
              <td className="p-2">client</td>
              <td className="p-2">passive</td>
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
              <td className="p-2">Hello</td>
              <td className="p-2">hello@gmail.com</td>
              <td className="p-2">Oct 30 2023</td>
              <td className="p-2">client</td>
              <td className="p-2">passive</td>
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
              <td className="p-2">Hello</td>
              <td className="p-2">hello@gmail.com</td>
              <td className="p-2">Oct 30 2023</td>
              <td className="p-2">client</td>
              <td className="p-2">passive</td>
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
