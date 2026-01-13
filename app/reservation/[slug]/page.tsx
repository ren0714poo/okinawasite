export default function ReservationCalendar() {
  return (
    <section className="mx-auto mt-24 max-w-3xl rounded-2xl bg-white p-10 shadow-md">
      <h2 className="mb-6 text-lg font-bold text-sky-400">
        予約状況
      </h2>
      <div className="mb-6 flex items-center justify-between">
        <button className="text-sky-400 text-xl">‹</button>
        <p className="text-lg font-bold">2026 / 1</p>
        <button className="text-sky-400 text-xl">›</button>
      </div>
      <div className="mb-2 grid grid-cols-7 text-center text-sm">
        <span className="text-red-500">日</span>
        <span>月</span>
        <span>火</span>
        <span>水</span>
        <span>木</span>
        <span>金</span>
        <span className="text-sky-500">土</span>
      </div>
      <div className="grid grid-cols-7 gap-y-4 text-center text-sm">
        {[
          { d: 1, s: "○" },
          { d: 2, s: "○" },
          { d: 3, s: "○" },
          { d: 4, s: "○" },
          { d: 5, s: "×" },
          { d: 6, s: "○" },
          { d: 7, s: "○" },
          { d: 8, s: "○" },
          { d: 9, s: "○" },
          { d: 10, s: "○" },
          { d: 11, s: "○" },
          { d: 12, s: "×" },
          { d: 13, s: "○" },
          { d: 14, s: "○" },
          { d: 15, s: "×" },
          { d: 16, s: "○" },
          { d: 17, s: "○" },
          { d: 18, s: "○" },
          { d: 19, s: "×" },
          { d: 20, s: "○" },
          { d: 21, s: "×" },
          { d: 22, s: "○" },
          { d: 23, s: "○" },
          { d: 24, s: "○" },
          { d: 25, s: "○" },
          { d: 26, s: "×" },
          { d: 27, s: "○" },
          { d: 28, s: "○" },
          { d: 29, s: "○" },
          { d: 30, s: "○" },
        ].map((day) => (
          <div key={day.d} className="flex flex-col items-center gap-1">
            <span>{day.d}</span>
            <span
              className={
                day.s === "○"
                  ? "text-red-500"
                  : "text-sky-500"
              }
            >
              {day.s}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <button className="rounded-full bg-sky-400 px-10 py-3 text-white shadow hover:bg-sky-500 transition">
          予約する
        </button>
      </div>
    </section>
  );
}
