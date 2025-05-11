import { ATM } from "@/entities/atm";
import { Auth } from "@/features/auth";
import { Blog } from "@/screens/blog";
import { NewsBlog } from "@/widgets/news-block";
import Image from "next/image";

export default async function Home() {
  let data = await fetch(`${process.env.SERVER_URL}blog`);
  let posts: any[] = await data.json();

  return (
    <div>
      <Auth />
      <Blog />
      <NewsBlog />
      <ATM />
      <h2>ATM</h2>
      <Image alt="globe" src="/globe.svg" width={20} height={20} />
      <br />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
