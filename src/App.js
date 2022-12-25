import { useMediaQuery } from 'react-responsive';
import './App.css';
import BottomNav from './components/sumaho/BottomNav';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/sumaho/Favorite';
import Search from './components/sumaho/Search';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px' })
  const baseURL = "http://localhost:3001/api/v1/"
  return (
    <div className="App">
      {isDesktop && <>大きいです…♡</>}
      {!isDesktop &&
        <>
          <Routes>
            <Route path='/' element={<Favorite />} />
            <Route path='/search' element={<Search baseURL={baseURL}/>} />
            <Route path='/event' element={<>イベント</>} />
          </Routes>
          <BottomNav />
        </>
      }

    </div>
  );
}

export default App;
