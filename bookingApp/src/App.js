import {
  Routes,
  Route, 
  BrowserRouter
} from "react-router-dom"
import Home from './pages/Home'
import List from './list/List'
import Hotel from './hotel/Hotel'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/hotels/:id' element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
