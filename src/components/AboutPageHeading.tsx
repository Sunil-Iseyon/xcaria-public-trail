import styles from '@/src/app/(routes)/showcase/page.module.css'

interface AboutPageHeadingProps {
    text: string;
  }

export default function AboutPageHeading({ text }: AboutPageHeadingProps){
    return(
        <div
          className={` relative inline-flex h-10 overflow-hidden rounded-full p-[1px] `}
        >
          <span
            className={`${styles.span1} absolute inset-[-1000%] animate-[spin_2s_linear_infinite] `}
          />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 backdrop-blur-3xl">
            <h1 className="p-8 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100 ">
              {text}
            </h1>
          </span>
        </div>
    )
}