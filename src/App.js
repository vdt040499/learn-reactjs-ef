import { Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums"component={AlbumFeature}/>
    </div>
  );
}

export default App;
