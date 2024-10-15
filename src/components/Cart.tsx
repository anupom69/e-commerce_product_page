"use client";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "./ui/separator";
import {  Trash2 } from "lucide-react";

export default function Cart({ count, setCount }: {count: number, setCount: (newCount: number) => void}) {
  return (
    <Popover>
      <PopoverTrigger className="relative">
        <Image
          className="w-6"
          src="/icon-cart.svg"
          alt="Cart"
          width={24}
          height={24}
        />
        <div className="absolute -top-2 -right-2 px-1 text-[12px] rounded-full bg-orange text-white">{count}</div>
      </PopoverTrigger>
      <PopoverContent className="mt-7 px-4 w-[100vw] md:w-auto">
        <h2 className="font-semibold pb-1">Cart</h2>
        <Separator />
        {count == 0 && (
          <p className="text-center p-8 pb-5 text-dark-grayish-blue">
            Empty Cart
          </p>
        )}
        {count > 0 && (
          <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 w-full">
              <Image
                src="/image-product-1-thumbnail.jpg"
                alt="Fall Limited Edition Sneakers"
                width={48}
                height={48}
                className="rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-medium text-sm text-gray-900">
                  Fall Limited Edition Sneakers
                </h3>
                <div className="flex items-center mt-1 gap-2">
                  <span className="ml-2 text-sm text-gray-500">
                    ${125} x {count}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    $375.00
                  </span>
                </div>
              </div>
              <button onClick={() => setCount(0)}>
                <Trash2 className="text-grayish-blue hover:text-orange" />
              </button>
            </div>
            <button className="w-full mt-4 bg-orange hover:opacity-90 text-white font-semibold py-2 px-4 rounded">
              Checkout
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
