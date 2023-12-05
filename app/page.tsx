import Chart from "@/components/Chart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ImUsers } from "react-icons/im";

export default function Home() {
  return (
    <>
      {/* Total Users */}
      <section className="flex gap-3 flex-wrap mt-4">
        <div className="relative px-8 py-4 overflow-hidden rounded-md bg-zinc-50 dark:bg-neutral-800">
          <ImUsers className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 text-[5rem] opacity-25 text-green-600" />
          <p className="text-sm">Total Users</p>
          <p className="text-2xl font-semibold">10,273</p>
          <p className="text-xs">
            <span className="text-green-600 font-medium">12%</span> more than previous week
          </p>
        </div>
        <div className="relative px-8 py-4 overflow-hidden rounded-md bg-zinc-50 dark:bg-neutral-800">
          <ImUsers className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 text-[5rem] opacity-25 text-green-600" />
          <p className="text-sm">Total Users</p>
          <p className="text-2xl font-semibold">10,273</p>
          <p className="text-xs">
            <span className="text-green-600 font-medium">12%</span> more than previous week
          </p>
        </div>
        <div className="relative px-8 py-4 overflow-hidden rounded-md bg-zinc-50 dark:bg-neutral-800">
          <ImUsers className="absolute left-0 top-1/2 -translate-x-1/3 -translate-y-1/2 text-[5rem] opacity-25 text-green-600" />
          <p className="text-sm">Total Users</p>
          <p className="text-2xl font-semibold">10,273</p>
          <p className="text-xs">
            <span className="text-green-600 font-medium">12%</span> more than previous week
          </p>
        </div>
      </section>
      {/* Latest Transactions */}
      <section className="mt-6 ov">
        <h2 className="text-xl font-medium mb-4">Latest Transactions</h2>
        <table className="text-left w-full text-sm bg-zinc-50 dark:bg-neutral-800 rounded-md overflow-hidden">
          <thead>
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date</th>
              <th className="p-4">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700 rounded-md">
              <td className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/assets/user-image.jpg" />
                    <AvatarFallback>
                      <Image
                        src="/assets/user-image.jpg"
                        height={50}
                        width={50}
                        alt="User Image"
                        className="w-12 h-auto"
                      />
                    </AvatarFallback>
                  </Avatar>
                  John Doe
                </div>
              </td>
              <td>
                <Badge variant={1 > 0 ? "destructive" : "secondary"}>cancelled</Badge>
              </td>
              <td className="p-4">14/02/2024</td>
              <td className="p-4">
                <div>$3,200</div>
              </td>
            </tr>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700 rounded-md">
              <td className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/assets/user-image.jpg" />
                    <AvatarFallback>
                      <Image
                        src="/assets/user-image.jpg"
                        height={50}
                        width={50}
                        alt="User Image"
                        className="w-12 h-auto"
                      />
                    </AvatarFallback>
                  </Avatar>
                  John Doe
                </div>
              </td>
              <td>
                <Badge variant={1 > 0 ? "destructive" : "secondary"}>cancelled</Badge>
              </td>
              <td className="p-4">14/02/2024</td>
              <td className="p-4">
                <div>$3,200</div>
              </td>
            </tr>
            <tr className="odd:bg-zinc-100 dark:odd:bg-neutral-700 rounded-md">
              <td className="p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/assets/user-image.jpg" />
                    <AvatarFallback>
                      <Image
                        src="/assets/user-image.jpg"
                        height={50}
                        width={50}
                        alt="User Image"
                        className="w-12 h-auto"
                      />
                    </AvatarFallback>
                  </Avatar>
                  John Doe
                </div>
              </td>
              <td>
                <Badge variant={1 > 0 ? "destructive" : "secondary"}>cancelled</Badge>
              </td>
              <td className="p-4">14/02/2024</td>
              <td className="p-4">
                <div>$3,200</div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* Weekly Recap */}
      <section className="my-6">
        <h2 className="text-xl font-medium mb-4">Weekly Recap</h2>
        <div className="h-96 bg-zinc-50 dark:bg-neutral-800 p-4 rounded-md">
          <Chart />
        </div>
      </section>
    </>
  );
}
