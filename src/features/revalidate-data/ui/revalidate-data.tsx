"use client";

import { Button } from "@/shared/ui/Button";
import { useRouter } from "next/navigation";

export function RevalidateData() {
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await fetch("/api/revalidate-cats", {});

        // const catsRes = await fetch(
        //   "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME",
        //   {
        //     cache: "force-cache",
        //     next: {
        //       tags: ["cats"],
        //     },
        //   },
        // );

        // const cats = await catsRes.json();

        console.log("Cache revalidated.");
        // console.log(`${cats[0].id} - ${cats[1].id}`);

        router.refresh();
      }}
    >
      revalidate data
    </Button>
  );
}
