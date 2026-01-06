import Image from "next/image";

export default function About() {
  return (
    <section className="w-full text-[#555555] py-40 flex justify-center">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center gap-10 px-6">

        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/assets/movie.png"
            alt="シーサーの紹介動画"
            width={422}
            height={248}
            className="w-full max-w-[420px] rounded-xl"
          />
        </div>

        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#4FC0E8] my-4">
            シーサーについて
          </h2>

          <p className="text-lg my-4 leading-relaxed">
            シーサーは沖縄の守り神です。
            <span className="inline-block bg-gradient-to-b from-transparent via-yellow-200 to-yellow-200 px-1">
              魔除け
            </span>
            や
            <span className="inline-block bg-gradient-to-b from-transparent via-yellow-200 to-yellow-200 px-1">
              運を呼び起こす
            </span>
            といった意味も込められています。
          </p>

          <p className="leading-relaxed">
            動画を見てシーサーの歴史をもっと深めよう！
          </p>
        </div>

      </div>
    </section>
  );
}
