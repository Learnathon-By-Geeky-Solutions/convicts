import { Jost } from "next/font/google"
import Image from "next/image"

const jost = Jost()

enum Errors {
  Configuration = "A 500 Internal Server Error has occured while trying to authenticate. Please contact us if this error persists.",
  AccessDenied = "Uh oh, it looks like you do not have access to this page.",
  Verification = "The verification token has expired or been already used.",
  Default = "An unforeseen error has occured. Please contact us if this error persists.",
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ErrorPage({ searchParams }: PageProps) {
  const error = (await searchParams).error as keyof typeof Errors | undefined

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${jost.className}`}
    >
      <Image
        src="/car_crash.svg"
        width={186}
        height={161}
        alt="A crashed car"
      />
      <h1 className="my-6.5 text-3xl font-semibold">Something went wrong!</h1>
      {error && (
        <>
          <p className="max-w-sm text-center">{Errors[error]}</p>
          <p className="mt-8">
            Error Status:{" "}
            <code className="rounded bg-slate-100 p-1 text-sm uppercase">
              {error}
            </code>
          </p>
        </>
      )}
    </main>
  )
}
