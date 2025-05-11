"use client";
import { ATMService, Nominal } from "@/entities/atm";
import { Auth } from "@/features/auth";
import { Blog } from "@/screens/blog";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Pre } from "@/shared/ui/Pre";
import { NewsBlog } from "@/widgets/news-block";
import Image from "next/image";
import { FormEventHandler, useCallback, useState } from "react";

export default function Home() {
  const [nominals, setNominals] = useState<Nominal[]>([]);
  const [isHaveAmount, setIsHaveAmount] = useState<boolean>(true);

  const submitHandler = useCallback<FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const amountFormValue = form.get("amount");

      if (amountFormValue !== null) {
        const amount = Number(amountFormValue);
        if (!isNaN(amount)) {
          const atm = new ATMService();
          const result = atm.getNominals(amount);
          if (result.isHaveFullAmount) {
            setNominals(result.nominals);
          } else {
            setNominals([]);
          }
          setIsHaveAmount(result.isHaveFullAmount);
        }
      }
    },
    [setNominals],
  );

  return (
    <div>
      <Auth />
      <Blog />
      <NewsBlog />
      <h2>ATM</h2>
      <Image alt="globe" src="/globe.svg" width={20} height={20} />
      <br />
      <form onSubmit={submitHandler} className="w-100 pl-5">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Amount
        </label>
        <Input
          type="number"
          name="amount"
          placeholder="0"
          required
          className="mt-1"
        />
        <Button className="mt-6" type="submit">
          Submit
        </Button>
      </form>
      <br />
      {!isHaveAmount && <p>The ATM doesn`t have current amount.</p>}
      <br />
      <div className="flex gap-10">
        <Pre title="Nominals" data={nominals} />
        <Pre
          title="nominal_x_number"
          data={ATMService.convertNominalToArray(nominals)}
        />
      </div>
    </div>
  );
}
