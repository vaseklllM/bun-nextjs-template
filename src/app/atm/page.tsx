import { ATM } from "@/entities/atm";
import { RevalidateData } from "@/features/revalidate-data";
import Link from "next/link";

const AtmPage = async () => {
  console.log("hi 3");

  return (
    <div className="p-4">
      <Link href="/">go home</Link>
      <br />
      <br />
      <RevalidateData />
      <h2 className="mt-5">ATM</h2>
      <ATM />
      <br />
      <br />
    </div>
  );
};

export default AtmPage;
