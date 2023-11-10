
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home';
import { SectionComponent } from './components/sections/section';
import { HeroesPage } from './pages/heroes';
import { Provider } from 'react-redux';
import { store } from './store/store';
function App() {

  return (
 <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}>
            <Route index element={<SectionComponent />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            <Route path='/heroes' element={<HeroesPage/>}></Route>w
          </Route>
        
        </Routes>
    </BrowserRouter>
  </Provider>
  )
}

export default App
