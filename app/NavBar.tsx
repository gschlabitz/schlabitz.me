import { useCallback } from "react"
import { BsSun, BsMoon, BsCaretRightFill } from "react-icons/bs"
import Link from "next/link"

export default function NavBar({
  children,
  setTheme,
  theme,
  title,
}: {
  children: React.ReactNode
  setTheme: (theme: string) => void
  theme: string
  title: string
}) {
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark"

    // keep the theme selection even if the page is reloaded
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  return (
    <div className="flex justify-between p-4">
      <span className="min-w-max">
        <Link href="/">Guido Schlabitz</Link>
        <BsCaretRightFill size="13" />
        {title}
      </span>
      <div className="flex justify-between">{children}</div>
      <div>
        {theme === "dark" ? (
          <BsSun title="Switch to Light Mode" onClick={toggleTheme} />
        ) : (
          <BsMoon title="Switch to Dark Mode" onClick={toggleTheme} />
        )}
      </div>
    </div>
  )
}
