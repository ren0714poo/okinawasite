import Mainvisual from "../component/mainvisual/mainvisual";
import About from "../component/about/about";
import Quiz from "../component/quiz/quiz";
import Explanation from "../component/explanation/explanation";
import Threestep from "../component/threestep/threestep";
import List from "../component/list/list";

export default function Home() {
  return (
    <div>
      <Mainvisual/>
      <About/>
      <Quiz/>
      <Explanation/>
      <Threestep/>
      <List/>
    </div>
  );
}
