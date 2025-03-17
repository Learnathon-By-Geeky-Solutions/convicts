import { Itim, Jost } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"
import { Button } from "@/ui/button"
import { Separator } from "@/ui/separator"

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
})

const jost = Jost()

export default function Page() {
  return (
    <div
      className={`mx-auto flex w-max max-w-sm flex-col items-center ${jost.className}`}
    >
      <div className="flex flex-col items-center">
        <Avatar className="mt-16 aspect-square h-auto w-max rounded-lg border-4 border-zinc-950">
          <AvatarImage src="" />
          <AvatarFallback
            className={`${itim.className} rounded-none p-2 indent-[.2em] text-xl tracking-[.2em]`}
          >
            LOGO
          </AvatarFallback>
        </Avatar>
        <h1 className="mt-10 mb-6 indent-[.3em] text-2xl tracking-[.3em] uppercase">
          Carlander
        </h1>
        <p>Find, Park, Go! Hassle-free parking at your fingertips.</p>
        <Button variant="custom_black" className="my-16 uppercase">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
      <Separator className="w-xs border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <Image
          className="mt-12 mb-8"
          src="/bangladesh.svg"
          alt="a vector art of bangladesh"
          width={174}
          height={219}
        />
        <p className="mb-16">50+ parking locations available for booking.</p>
      </div>
      <Separator className="w-xs border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <Image
          className="mt-24 mb-11"
          src="/mobile.svg"
          alt="the app can be accessed anytime via any device"
          width={181}
          height={137}
        />
        <p className="mb-11">Book a spot on the go!</p>
      </div>
      <Separator className="w-xs border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <Image
          className="mt-20 mb-10"
          src="/money.svg"
          alt="the app features multiple payment options"
          width={178}
          height={168}
        />
        <p className="mb-10 text-center">
          Multiple payment options including payment apps and card.
        </p>
      </div>
      <Separator className="w-xs border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <h2 className="mt-16 mb-14 indent-[.3em] text-2xl tracking-[.3em] uppercase">
          And more
        </h2>
        <Button variant="custom_black" asChild className="mb-[8rem] uppercase">
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </div>
  )
}
