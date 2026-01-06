import Image from "next/image";

export default function Threestep() {
  return (
    <section className="w-full py-16 text-[#555555]">
          <h2 className="pb-12 text-center md:text-2xl font-bold text-sky-400">
            超簡単予約3ステップ!
          </h2>


        <article className="relative w-full max-w-8xl">
          <Image
            src="/assets/shisa_shop.png"
            alt="お店を選ぶ"
            width={1280}
            height={320}
            className="w-full object-cover"
          />
          <div className="absolute left-50 top-1/2 w-72 -translate-y-1/2 rounded-2xl bg-white/90 p-6 shadow-md">
            <p className="font-bold text-red-500 mb-2">1. お店を選ぶ</p>
            <p className="text-sm leading-relaxed">
              気になるシーサー作り体験のお店を一覧からお選びください。
            </p>
          </div>
        </article>

        <article className="relative w-full max-w-8xl">
          <Image
            src="/assets/shisa_dateandtime.png"
            alt="日時を決める"
            width={1280}
            height={320}
            className="w-full object-cover"
          />
          <div className="absolute right-50 top-1/2 w-72 -translate-y-1/2 rounded-2xl bg-white/90 p-6 shadow-md">
            <p className="font-bold text-red-500 mb-2">2. 日時を決める</p>
            <p className="text-sm leading-relaxed">
              カレンダーからご希望の日時を選択し、人数などを入力します。
            </p>
          </div>
        </article>

        <article className="relative w-full max-w-8xl">
          <Image
            src="/assets/shisa_reservation.png"
            alt="予約を確定する"
            width={1280}
            height={320}
            className="w-full object-cover"
          />
          <div className="absolute left-50 top-1/2 w-72 -translate-y-1/2 rounded-2xl bg-white/90 p-6 shadow-md">
            <p className="font-bold text-red-500 mb-2">3. 予約を確定する</p>
            <p className="text-sm leading-relaxed">
              内容を確認して予約を確定。あとは当日を楽しむだけ！
            </p>
          </div>
        </article>
    </section>
  );
}
