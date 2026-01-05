import Mainvisual from "./component/mainvisual/mainvisual";
import Header from "./component/header/header";
import About from "./component/about/about";

export default function Home() {
  return (
    <div>
      <Header/>
      <Mainvisual/>
      <About/>
    </div>
  );
}
