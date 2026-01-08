import Image from "next/image";

export default function Explanation() {
  return (
    <section className="w-full py-12 flex items-center justify-center text-[#555555]">
      <div className="flex flex-col items-center justify-center gap-4 mt-16 text-center px-6">
        <h1 className="text-xl text-sky-400 md:text-2xl font-bold">
          みんなもシーサーを作って家族を守ろう！
        </h1>

        <p className="text-sm md:text-base">
          沖縄にはシーサーの制作体験する場所がいっぱいあるよ！
        </p>

        <Image
          src="/assets/shisa.png"
          alt="シーサー"
          width={144}
          height={80}
          className="mt-2"
        />
      </div>
    </section>
  );
}
