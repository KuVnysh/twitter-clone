import './App.css';
import Home from './Components/HomeComponent';
import Search from './Components/Search';
import SideMenu from './Components/SideMenu';

function App() {
  return (
    <div className="App d-flex flex-row">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      <div className='vertical-divider'></div>
      <Search/>
    </div>
  );
}

export default App;
