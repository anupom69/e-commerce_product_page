"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function ProductShowcase({ count, setCount }: { count: number, setCount: (value: number | ((prevCount: number) => number)) => void }
) {
  const [quantity, setQuantity] = useState<number>(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  console.log(count);
  const images = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  const products = [
    {
      id: "0xlkjhg",
      name: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 125.0,
      offPercentage: 50,
      regularPrice: 250.0,
    },
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto p-4 mt-12">
      <div className="flex-1 space-y-4">
        <div
          className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={images[currentImage]}
            alt="Fall Limited Edition Sneakers"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex gap-4 justify-center">
          {images.map((src, index) => (
            <button
              key={index}
              className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                index === currentImage ? "ring-4 ring-orange opacity-80" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={src}
                alt={`Thumbnail ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-sm uppercase font-bold text-orange">
          Sneaker Company
        </h2>
        <h1 className="text-4xl font-bold">{products[0].name}</h1>
        <p className="text-muted-foreground">{products[0].description}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">${products[0].price}</span>
            <span className="bg-primary/10 text-primary font-bold px-2 py-1 rounded">
              {products[0].offPercentage}%
            </span>
          </div>
          <span className="text-muted-foreground line-through">
            ${products[0].regularPrice}
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCount((c: number) => c + quantity);
            }}
          >
            <Button className="flex-1">
              <ShoppingCart className="mr-2 h-4 w-4" onClick={() => {}} /> Add
              to cart
            </Button>
          </form>
        </div>
      </div>

      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-3xl">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="relative aspect-square">
            <Image
              src={images[currentImage]}
              alt="Fall Limited Edition Sneakers"
              layout="fill"
              objectFit="cover"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="flex gap-4 justify-center mt-4">
            {images.map((src, index) => (
              <button
                key={index}
                className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                  index === currentImage ? "ring-4 ring-orange opacity-75" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
