import './App.css'; 
import 'react-toastify/dist/ReactToastify.css';
import Create from './components/Create';
import { ToastContainer } from 'react-toastify';
import Update from './components/Update';
import Read from './components/Read';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Read />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
