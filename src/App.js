import { useMediaQuery } from 'react-responsive';
import './App.css';
import BottomNav from './components/sumaho/BottomNav';
import { Routes, Route } from 'react-router-dom';

function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px' })
  return (
    <div className="App">
      {isDesktop && <>大きいです…♡</>}
      {!isDesktop &&
        <>
          <Routes>
            <Route path='/' element={<>サイネージ</>} />
            <Route path='/search' element={<>さがす</>} />
            <Route path='/event' element={<>イベント</>} />
          </Routes>
          <BottomNav />
        </>
      }

    </div>
  );
}

export default App;
