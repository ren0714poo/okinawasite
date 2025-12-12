import Image from "next/image";
export default function Header() {
  return(
    <>
    <header>
      <nav className="w-full">
        <ul className="flex justify-end mx-28 space-x-6 items-center">
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