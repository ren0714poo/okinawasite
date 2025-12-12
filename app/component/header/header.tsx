import Image from "next/image";
export default function Header() {
  return(
    <>
    <header className="w-full h-24 flex items-center justify-between px-8 shadow-md">
      <Image src="/logo.png" alt="logo" width={80} height={40} />
      <nav>
        <ul className="flex items-center space-x-6">
          <li>シーサーについて</li>
          <li>クイズ</li>
          <li>3step</li>
          <li>イベント一覧</li>
        </ul>
      </nav>
    </header>
    </>
  );
}