import { Jost } from "next/font/google"
import Image from "next/image"

const jost = Jost()

export default async function ErrorPage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${jost.className}`}
    >
      <Image src="/mailed.svg" width={154} height={156} alt="A crashed car" />
      <h1 className="my-6.5 text-3xl font-semibold">Check your e-mail</h1>
      <p className="max-w-sm text-center">
        We sent you a verification e-mail. Follow the link in the e-mail to log
        in or to sign up.
      </p>
    </main>
  )
}
