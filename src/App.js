import {Routes, Route} from 'react-router-dom';
import Navbar from './components/utils/Navbar';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<><h2>Hello</h2></>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
