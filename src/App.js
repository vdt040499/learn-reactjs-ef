import { Link, NavLink, Route } from 'react-router-dom';
import './App.css';

import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
        <p><Link to="/todos">Todos</Link></p>
        <p><Link to="/albums">Albums</Link></p>

        <p><NavLink to="/todos" activeClassName="active-menu">Todos</NavLink></p>
        <p><NavLink to="/albums">Albums</NavLink></p>

        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums"component={AlbumFeature}/>
    </div>
  );
}

export default App;
