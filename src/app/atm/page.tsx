import { ATM } from "@/entities/atm";
import Link from "next/link";

export default async function AtmPage() {
  return (
    <div className="p-4">
      <Link href="/">go home</Link>
      <h2 className="mt-5">ATM</h2>
      <ATM />
    </div>
  );
}
