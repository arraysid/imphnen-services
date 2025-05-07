import Image from "next/image";
import { BiDownvote, BiUpvote } from "react-icons/bi";

import { Avatar, AvatarFallback, AvatarImage } from "@imphnen/ui/avatar";
import { Button } from "@imphnen/ui/button";

export function PostCard() {
  return (
    <div className="shadow-shadow flex h-fit w-full flex-col gap-2 rounded-xl border px-2.5 py-4">
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>

      <h1 className="text-lg">Some Very very long title here</h1>

      <Image
        src="https://media.daily.dev/image/upload/f_auto,q_auto/v1/posts/f4086248c933d1cdcbda6aa516fb4a0b?_a=AQAEuj9"
        width={600}
        height={400}
        className="rounded-lg"
        alt=""
        unoptimized
      />

      <div className="flex gap-1.5 pt-1">
        <Button size="icon" variant="reverse" className="bg-white">
          <BiUpvote className="size-5" />
        </Button>
        <Button size="icon" variant="reverse" className="bg-white">
          <BiDownvote className="size-5" />
        </Button>
      </div>
    </div>
  );
}
