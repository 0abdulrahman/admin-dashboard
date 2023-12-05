import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserForm from "@/components/UserForm";
import Image from "next/image";

export default function page({ params }: { params: { productID: string } }) {
  return (
    <>
      <section className="mt-6">
        <div className="flex items-center gap-2 mb-3 bg-zinc-50 dark:bg-neutral-800 p-4 rounded-md">
          <Avatar>
            <AvatarImage src="/assets/user-image.jpg" />
            <AvatarFallback>
              <Image src="/assets/user-image.jpg" height={50} width={50} alt="User Image" className="w-12 h-auto" />
            </AvatarFallback>
          </Avatar>
          <p>Abdulrahman Muhammad</p>
        </div>
        <UserForm />
      </section>
    </>
  );
}
