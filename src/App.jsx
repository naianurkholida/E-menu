import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Page/main';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      {/* <Route path="/detail" element={<Detail/>}/> */}
    </Routes>
  );
}

export default App;
