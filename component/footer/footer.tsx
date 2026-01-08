export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-gradient-to-r from-sky-400 to-sky-200 text-[#fefefe]">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 gap-8 md:grid-cols-3">        
        <div>
          <h2 className="text-lg font-bold mb-4">沖縄シーサー体験</h2>
          <p className="text-sm leading-relaxed">
            沖縄の文化であるシーサー作りを、
            もっと身近に、もっと楽しく。
          </p>
        </div>

        <nav>
          <h3 className="text-sm font-bold mb-4">メニュー</h3>
          <ul className="space-y-2 text-sm">
            <li>ホーム</li>
            <li>イベント一覧</li>
            <li>クイズ</li>
            <li>3ステップ</li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-black/10 py-4 text-center text-xs">
        © 2026 Okinawa Shisa Project
      </div>
    </footer>
  );
}
