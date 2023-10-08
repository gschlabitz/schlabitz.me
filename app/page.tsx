import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guido Schlabitz - Overview",
  description: "The story of Guido Schlabitz. Also, his CV/Resume.",
}

export default function Page() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="md bg-base2 dark:bg-base02 max-w-md rounded-xl p-8">
        <p>Welcome to my WWW page!</p>
        <p>
          My name is Guido Schlabitz and this is my personal website. If you
          want to know more about me, select any of the tabs at the top.
        </p>
        <p>
          You can see <a href="/what">what</a> I&apos;m currently working on,{" "}
          <a href="/where">where</a> I&apos;ve lived in the world, or{" "}
          <a href="/when">when</a> big things happened in my life.
        </p>
      </div>
    </div>
  )
}
