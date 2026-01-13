import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return(

    <header className="fixed top-0 z-50 w-full h-20 flex items-center justify-between px-24 bg-[#fefefe] shadow-md">
      <Link href="/">
        <Image src="/assets/yuna.png" alt="ゆな" width={120} height={80} className="cursor-pointer"/>
      </Link>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#about">シーサーについて</Link>
            </li>
            <li>
              <Link href="#quiz">クイズ</Link>
            </li>
            <li>
              <Link href="#threestep">3step</Link>
            </li>
            <li>
              <Link href="#list">イベント一覧</Link>
            </li>
          </ul>
        </nav>
    </header>
  );
};