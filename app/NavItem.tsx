import Link from "next/link"

export default function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="mx-8 rounded-xl bg-slate-500 px-8">
      {children}
    </Link>
  )
}
