import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Guido Schlabitz - Home",
  description: "The story of Guido Schlabitz. Also, his CV/Resume.",
}

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-20 sm max-w-md rounded-sm">
        <p>Hi!</p>
        <p>
          My name is Guido Schlabitz and this is my personal website. If you
          want to know more about me, select any of the tabs at the top.
        </p>
        <p>
          You can see <a href="/what">what</a> I&apos;m currently working on,
          <a href="/where">where</a> I&apos;ve lived in the world, or
          <a href="/when">when</a> big things happened in my life.
        </p>
      </div>
    </div>
  )
}
