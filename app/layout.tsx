import type { Metadata } from "next"
import "./global.css"
import Container from "./Container"

export const metadata: Metadata = {
  title: "Guido Schlabitz",
  description: "The story of Guido Schlabitz. Also, his CV/Resume.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
