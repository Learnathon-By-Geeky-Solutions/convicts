import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar"
import { Button } from "@/ui/button"
import { Separator } from "@/ui/separator"
import { Itim, Jost } from "next/font/google"
import Image from "next/image"

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
})

const jost = Jost()

export default function Page() {
  return (
    <div className={`${jost.className}`}>
      <div className="flex flex-col items-center">
        <Avatar className="mt-[4rem] aspect-square h-auto w-max rounded-lg border-4 border-zinc-950">
          <AvatarImage src="" />
          <AvatarFallback
            className={`${itim.className} rounded-none p-2 indent-[.2em] text-xl tracking-[.2em]`}
          >
            LOGO
          </AvatarFallback>
        </Avatar>
        <h1 className="mb-6 mt-10 indent-[.3em] text-2xl uppercase tracking-[.3em]">
          Carlander
        </h1>
        <p>Find, Park, Go! Hassle-free parking at your fingertips.</p>
        <Button className="my-[4rem] uppercase">Get Started</Button>
      </div>
      <Separator className="mx-auto w-[90%] border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <Image
          className="mb-8 mt-12"
          src="/bangladesh.svg"
          alt="a vector art of bangladesh."
          width={174}
          height={219}
        />
        <p className="mb-[4rem]">
          50+ parking locations available for booking.
        </p>
      </div>
      <Separator className="mx-auto w-[90%] border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <Image
          className="mb-11 mt-[6rem]"
          src="/mobile.svg"
          alt="the app can be accessed anytime via any device"
          width={181}
          height={137}
        />
        <p className="mb-11">Book a spot on the go!</p>
      </div>
      <Separator className="mx-auto w-[90%] border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <Image
          className="mb-10 mt-[5rem]"
          src="/money.svg"
          alt="the app features multiple payment options"
          width={178}
          height={168}
        />
        <p className="mb-10 text-center">
          Multiple payment options including payment apps and card.
        </p>
      </div>
      <Separator className="mx-auto w-[90%] border-2 border-lime-500" />

      <div className="flex flex-col items-center">
        <h2 className="mb-[3.5rem] mt-[4rem] indent-[.3em] text-2xl uppercase tracking-[.3em]">
          And more
        </h2>
        <Button className="mb-[8rem] uppercase">Get Started</Button>
      </div>
    </div>
  )
}
