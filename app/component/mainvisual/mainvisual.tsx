import Image from "next/image";

export default function Mainvisual() {
  return (
    <section className="w-full text-[#555555] py-20 flex items-center justify-center">
      <div className="mx-auto flex max-w-8xl items-center gap-16 px-10">
        
        <div className="relative">
          <Image 
          src="/assets/mainview.png" 
          alt="沖縄の海" 
          width={1100} 
          height={700} 
          className="rounded-[40px] object-cover" priority
          />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-sky-300"></div>
        </div>
        <h1 className="text-6xl font-bold leading-tight tracking-wide writing-vertical">
          沖縄シーサー<br/>
          制作大作戦！
        </h1>
      </div>
    </section>
  );
}
