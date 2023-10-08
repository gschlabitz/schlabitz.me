import { useCallback } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

export default function NavBar({
  children,
  setTheme,
  theme,
}: {
  children: React.ReactNode
  setTheme: (theme: string) => void
  theme: string
}) {
  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark"

    // keep the theme selection even if the page is reloaded
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }, [setTheme, theme])

  return (
    <div className="flex justify-between py-4">
      <div className="mx-8">Guido Schlabitz</div>
      <div className="flex justify-between">{children}</div>
      <div className="mx-8">
        {theme === "dark" ? (
          <FaMoon title="Switch to Light Mode" onClick={toggleTheme} />
        ) : (
          <FaSun title="Switch to Dark Mode" onClick={toggleTheme} />
        )}
      </div>
    </div>
  )
}
