"use client";

import { getPosts } from "@/app/atm/fetcher";
import { Button } from "@/shared/ui/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const RevalidateData = () => {
  const router = useRouter();

  const [posts, setPosts] = useState({});

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <>
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
          console.log("refreshed");

          // router.prefetch("/");
        }}
      >
        revalidate data
      </Button>

      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </>
  );
};
