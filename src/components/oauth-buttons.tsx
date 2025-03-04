import Form from "next/form"
import Image from "next/image"

import { signIn } from "@/lib/auth"

import { Button } from "@/ui/button"

export default function OAuthButtons() {
  return (
    <Form
      action={async (data) => {
        "use server"
        const provider = data.get("provider")?.toString()
        await signIn(provider)
      }}
      className="my-9 flex gap-6"
    >
      <Button
        className="h-auto rounded-xl px-[3.3rem] py-1.5"
        variant="custom_lime"
        name="provider"
        value="google"
      >
        <Image
          src="/google_logo.svg"
          alt="Sign in with Google"
          width={37}
          height={36}
        />
      </Button>

      <Button
        className="h-auto rounded-xl px-[3.3rem] py-1.5"
        variant="custom_lime"
        name="provider"
        value="github"
      >
        <Image
          src="/github_logo.svg"
          alt="Sign in with Github"
          width={38}
          height={37}
        />
      </Button>
    </Form>
  )
}
