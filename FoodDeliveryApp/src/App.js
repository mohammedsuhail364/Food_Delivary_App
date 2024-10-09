import AppBar from './component/AppBar';
import { Banner } from './component/Banner';
import Comments from './component/Comments';
import { Menu } from './component/Menu';
import { PickoftheWeek } from './component/PickoftheWeek';


// import Image from "react-bootstrap/Image";
function App() {
  return (
    <>
    <AppBar/>
    <Banner/>
    <Menu/>
    <PickoftheWeek/>
    <Comments/>
    <div className="text-center text-primary my-3 small">
      CopyRight 2023-2024
    </div>
    </>
    
  );
}

export default App;
