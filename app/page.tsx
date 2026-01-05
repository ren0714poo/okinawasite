import Mainvisual from "./component/mainvisual/mainvisual";
import Header from "./component/header/header";
import About from "./component/about/about";
import Quiz from "./component/quiz/quiz";

export default function Home() {
  return (
    <div>
      <Header/>
      <Mainvisual/>
      <About/>
      <Quiz/>
    </div>
  );
}
