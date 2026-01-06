import Mainvisual from "./component/mainvisual/mainvisual";
import Header from "./component/header/header";
import About from "./component/about/about";
import Quiz from "./component/quiz/quiz";
import Explanation from "./component/explanation/explanation";
import Threestep from "./component/threestep/threestep";


export default function Home() {
  return (
    <div>
      <Header/>
      <Mainvisual/>
      <About/>
      <Quiz/>
      <Explanation/>
      <Threestep/>
    </div>
  );
}
