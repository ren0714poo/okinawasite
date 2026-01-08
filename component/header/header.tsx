import Image from "next/image";
export default function Header() {
  return(
    <>
    <header className="w-full h-24 flex items-center justify-between px-24 bg-[#fefefe]  shadow-md">
      <Image src="/assets/yuna.png" alt="ゆな" width={120} height={80}/>
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