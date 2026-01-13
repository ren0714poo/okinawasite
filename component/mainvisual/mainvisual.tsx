import Image from "next/image";

export default function Mainvisual() {
  return (
    <section className="mx-auto text-[#555555] py-6 flex items-center justify-center">
        <Image 
          src="/assets/mainview.png" 
          alt="沖縄の海" 
          width={1000} 
          height={200} 
          className="object-cover" priority
        />
      <h1 className="text-6xl py-6 font-bold leading-tight tracking-wide writing-vertical">
        沖縄シーサー<br/>
        制作大作戦！
      </h1>
    </section>
  );
}
