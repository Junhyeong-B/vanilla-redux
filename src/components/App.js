import { HashRouter, Route } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/:id" exact component={Detail} />
    </HashRouter>
  );
}

export default App;
