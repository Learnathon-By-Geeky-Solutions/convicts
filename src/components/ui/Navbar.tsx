import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Form from "next/form"
import { signIn } from "next-auth/react"

const Navbar = () => {
  return (
    <div className="bg-black px-5 py-3 font-sans shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={144} />
        </Link>
        <Form
          action={async () => {
            "use server"
            await signIn("google")
          }}
        >
          <Button variant="outline" size="lg" type="submit">
            Login
          </Button>
        </Form>
      </nav>
    </div>
  )
}

export default Navbar
