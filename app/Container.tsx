"use client"
import { useState, useEffect } from "react"
import { IconContext } from "react-icons"

import NavBar from "./NavBar"
import NavItem from "./NavItem"

export default function Container({ children }: { children: React.ReactNode }) {
  // Default to dark to avoid flashing the light theme.
  // I don't think anyone would complain about flashing the dark theme before
  // showing the light theme. Vice versa? OMG!
  const [theme, setTheme] = useState("dark")
  const [title, setTitle] = useState("Loading")

  useEffect(() => {
    const titleParts = document.title.split("-")
    const subTitle = titleParts[1] || "Error"

    setTitle(subTitle.trim())

    // restore the theme that was used last in the current browser
    setTheme(localStorage.getItem("theme") || "")
  }, [])

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <div className={`${theme} h-screen`}>
        <nav>
          <NavBar title={title} theme={theme} setTheme={setTheme}>
            <NavItem href="/what">What</NavItem>
            <NavItem href="/when">When</NavItem>
            <NavItem href="/where">Where</NavItem>
          </NavBar>
        </nav>
        <main>{children}</main>
      </div>
    </IconContext.Provider>
  )
}
