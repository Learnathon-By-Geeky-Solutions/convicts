import Form from "next/form"

import { auth, signOut } from "@/lib/auth"

import { Button } from "@/ui/button"

const Navbar = async () => {
  const session = await auth()

  return (
    <header>
      <nav className="flex items-center justify-end bg-lime-500">
        {session?.user && (session.user.username ?? session.user.name)}
        <Form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Button variant="link">Log out</Button>
        </Form>
      </nav>
    </header>
  )
}

export default Navbar
