import Link from "next/link"

export default function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="bg-base2 dark:bg-base02 mx-8 rounded-xl px-8">
      {children}
    </Link>
  )
}
