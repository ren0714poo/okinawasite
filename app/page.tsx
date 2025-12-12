import Image from "next/image";
import Mainvisual from "./component/mainvisual/mainvisual";
import Header from "./component/header/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <Image src="/assets/yuna.png" alt="ゆな" width={300} height={100}/>
      <Mainvisual/>
    </div>
  );
}
