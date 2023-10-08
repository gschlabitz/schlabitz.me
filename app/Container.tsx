"use client"
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import NavItem from "./NavItem"

export default function Container({ children }: { children: React.ReactNode }) {
  // Default to dark to avoid flashing the light theme.
  // I don't think anyone would complain about flashing the dark theme before
  // showing the light theme. Vice versa? OMG!
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    // restore the theme that was used last in the current browser
    setTheme(localStorage.getItem("theme") || "")
  }, [])

  return (
    <div className={`${theme} h-screen`}>
      <nav>
        <NavBar theme={theme} setTheme={setTheme}>
          <NavItem href="/what">What</NavItem>
          <NavItem href="/when">When</NavItem>
          <NavItem href="/where">Where</NavItem>
        </NavBar>
      </nav>
      <main>{children}</main>
    </div>
  )
}
