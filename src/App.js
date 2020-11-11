import { Link, NavLink, Route, Switch } from "react-router-dom";
import "./App.css";

import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";

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
        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>

      {/* <Route path="/" component={TodoFeature} />
      <Route path="/todos" component={TodoFeature} />
      <Route path="/albums" component={AlbumFeature} /> */}
    </div>
  );
}

export default App;
