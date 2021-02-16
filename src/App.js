import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Tab2 from "./Component/Tab2";
import Tab1 from "./Component/Tab1";
import Navmenu from "./Component/Navmenu";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Navmenu />
      <Switch>
        <Route exact path="/Tab1" component={Tab1} />
        <Route exact path="/Tab2" component={Tab2} />
      </Switch>
    </div>
  );
}

export default App;
