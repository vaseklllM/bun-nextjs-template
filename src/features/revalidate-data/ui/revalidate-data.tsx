"use client";

import { Button } from "@/shared/ui/Button";

export function RevalidateData() {
  return (
    <Button
      onClick={async () => {
        const result = await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME`,
          {
            next: {
              tags: ["cats"],
            },
          },
        ).then((res) => res.json());
        console.log(`${result[0].id}-${result[1].id}`);
      }}
    >
      revalidate data
    </Button>
  );
}
