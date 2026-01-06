import Image from "next/image";

export default function Quiz() {
  return (
    <section className="w-full bg-gradient-to-r from-sky-400 to-sky-200 py-36">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            シーサークイズに挑戦！
          </h2>
          <p className="text-sm md:text-base">
            シーサークイズに正解してシーサー博士になろう！
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16">
          
          <div className="w-[260px] rounded-2xl bg-white p-6 text-center shadow-lg">
            <p className="text-sky-400 text-sm mb-2">Q.1</p>
            <Image
              src="/assets/quiz1.png"
              alt="クイズ1"
              width={200}
              height={130}
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-sm mb-4">
              沖縄の守り神であるシーサーは、何から家を守っているでしょうか？
            </p>
            <div className="flex flex-col gap-2">
              <button className="rounded-full bg-sky-400 text-white py-1 text-sm">
                1. 災害や悪霊
              </button>
              <button className="rounded-full bg-sky-400 text-white py-1 text-sm">
                2. 災害や鬼
              </button>
            </div>
          </div>

          <div className="w-[260px] rounded-2xl bg-white p-6 text-center shadow-lg">
            <p className="text-sky-400 text-sm mb-2">Q.2</p>
            <Image
              src="/assets/quiz2.png"
              alt="クイズ2"
              width={200}
              height={130}
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-sm mb-4">
              元々シーサーのモデルになった動物はなんでしょうか？
            </p>
            <div className="flex flex-col gap-2">
              <button className="rounded-full bg-sky-400 text-white py-1 text-sm">
                1. ライオン
              </button>
              <button className="rounded-full bg-sky-400 text-white py-1 text-sm">
                2. こま犬
              </button>
            </div>
          </div>

          <div className="w-[260px] rounded-2xl bg-white p-6 text-center shadow-lg">
            <p className="text-sky-400 text-sm mb-2">Q.3</p>
            <Image
              src="/assets/quiz3.png"
              alt="クイズ3"
              width={200}
              height={130}
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-sm mb-4">
              シーサーは、どこから沖縄にやってきたと言われている？
            </p>
            <div className="flex flex-col gap-2">
              <button className="rounded-full bg-sky-400 text-white py-1 text-sm">
                1. アフリカ
              </button>
              <button className="rounded-full bg-sky-400 text-white py-1 text-sm">
                2. 中国
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
