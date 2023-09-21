import {Routes, Route} from 'react-router-dom';
import Navbar from './components/utils/Navbar';
import Footer from './components/utils/Footer';
import Home from './components/pages/Home';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
