import BoardPage from './containers/BoardPage/BoardPage';
import Topbar from './components/Topbar/Topbar';

import classes from './App.module.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <main>
        <BoardPage />
      </main>
    </div>
  );
}

export default App;
