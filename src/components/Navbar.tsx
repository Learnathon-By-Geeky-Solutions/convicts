import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Form from "next/form"
import { signIn, signOut } from "@/auth"
import { auth } from "@/auth"

const Navbar = async () => {
  const session = await auth()

  return (
    <header className="border-4 bg-green-500 px-5 py-3 font-sans shadow-sm">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={144} />
        </Link>

        {/*  Github auth started here  */}

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/">
                <Button variant="custom" size="lg">
                  Park
                </Button>
              </Link>
              <Form
                action={async () => {
                  "use server"

                  await signOut({ redirectTo: "/" })
                }}
              >
                <Button variant="custom" size="lg" type="submit">
                  Logout
                </Button>
              </Form>
              <Link href={`/user/${session?.user?.id}`}>
                <Button variant="custom" size="lg">
                  {session?.user?.name}
                </Button>
              </Link>
            </>
          ) : (
            <Form
              action={async () => {
                "use server"

                await signIn("github")
              }}
            >
              <Button variant="custom" size="lg" type="submit">
                Login With Github
              </Button>
            </Form>
          )}
        </div>

        {/*  Github auth finished here  */}
        {/*  Google auth started here  */}

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/">
                <Button variant="custom" size="lg">
                  Park
                </Button>
              </Link>
              <Form
                action={async () => {
                  "use server"

                  await signOut({ redirectTo: "/" })
                }}
              >
                <Button variant="custom" size="lg" type="submit">
                  Logout
                </Button>
              </Form>
              <Link href={`/user/${session?.user?.id}`}>
                <Button variant="custom" size="lg">
                  {session?.user?.name}
                </Button>
              </Link>
            </>
          ) : (
            <Form
              action={async () => {
                "use server"

                await signIn("google")
              }}
            >
              <Button variant="custom" size="lg" type="submit">
                Login With Google
              </Button>
            </Form>
          )}

          {/*  Google auth finished here  */}

          <Link href="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
