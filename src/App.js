import { useMediaQuery } from 'react-responsive';
import './App.css';
import BottomNav from './components/sumaho/BottomNav';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/sumaho/Favorite';
import Search from './components/sumaho/Search';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Results from './components/sumaho/Results';

function App() {
  const baseURL = "http://localhost:3001/api/v1/"

  //スマホ用・レスポンシブにする
  const isDesktop = useMediaQuery({ query: '(min-width: 768px' })
  //（とりあえず）スマホ用・themeを決める
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F3549F'
      },
      secondary: {
        main: "#D76B6B"
      },
      info: {
        main: '#333333'
      },
      subtitle1: {
        main: '#515151'
      }
    },
    typography: {
      fontFamily: [
        '"Noto Sans JP"',
        '"Zen Kaku Gothic New"'
      ].join(',')
    }
  })
  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {isDesktop && <>大きいです…♡</>}
        {!isDesktop &&
          <>
            <Routes>
              <Route path='/' element={<>ルート</>} />
              <Route path='/sumaho' element={<BottomNav />} >
                <Route path='' element={<Favorite />} />
                <Route path='search' element={<Search baseURL={baseURL} />} />
                <Route path='results/:tag_id' element={<Results baseURL={baseURL} />} />
                <Route path='event' element={<>イベント</>} />
              </Route>
            </Routes>
          </>
        }
      </ThemeProvider>

    </div>
  );
}

export default App;
