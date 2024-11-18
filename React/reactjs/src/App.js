import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task1 from './Module 1/Task1';
import Task2 from './Module 1/Task2';
import Task4 from './Module 1/Task4';
import Task7Mouse from './Module 1/Task7Mouse';
import Task5ListView from './Module 1/Task5ListView';
import Task6LoginModal from './Module 1/Task6LoginModal';
import Login from './Module 1/Task3/Login';
import Index from './Module 1/Task3/Index';
import { ToastContainer } from 'react-toastify';
import PublicIndex from './Module 1/Task3/PublicIndex';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/demo1' element={<Task1 />} />
          <Route path='/counterApp' element={<Task2 />} />
          <Route path='/to-do' element={<Task4 />} />
          <Route path='/mouse' element={<Task7Mouse />} />
          <Route path='/index' element={<Index />} />
          <Route path='/login' element={<Login />} />
          <Route path='/public-index' element={<PublicIndex />} />
          <Route path='/list' element={<Task5ListView />} />
          <Route path='/loginModal' element={<Task6LoginModal />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
