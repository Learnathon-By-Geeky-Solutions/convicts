import "next-auth/jwt"

// newUser is only relevant for email sign-ins

declare module "next-auth" {
  interface User {
    username?: string
  }

  interface Session {
    newUser?: boolean
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    newUser?: boolean
    username?: string
  }
}
