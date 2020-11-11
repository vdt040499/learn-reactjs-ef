import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <p>
        <NavLink to="/todos" activeClassName="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>

      <Switch>
        <Redirect from="/home" to="/" exact/>

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
