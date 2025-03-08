import * as React from "react"

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components"

interface EmailParams {
  url: string
}

export default function VerifyEmail({ url }: EmailParams) {
  return (
    <Html>
      <Head />
      <Body
        style={{ fontFamily: "Open Sans, sans-serif", margin: "2rem 3rem" }}
      >
        <Preview>Verify your Carlander login</Preview>
        <Container>
          <Heading style={{ fontFamily: "Verdana, sans-serif" }}>
            Your magic link for Carlander
          </Heading>
          <Link
            style={{ textDecoration: "underline", color: "blue" }}
            href={url}
          >
            Click here to log in.
          </Link>
          <Text style={{ color: "gray" }}>
            If you did not try to log in, you can safely ignore this message.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}
