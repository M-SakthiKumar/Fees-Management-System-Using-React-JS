import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentListing from './Component/StudentListing';
import StudentCreate from './Component/StudentCreate';
import StudentDetails from './Component/StudentDetails';
import StudentEdit from './Component/StudentEdit';


function App() {
  return (
    <div className="App">
       <h1 className='text-success'>Fees Management System</h1>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<StudentListing/>}></Route>
        <Route path='/Student/Create' element={<StudentCreate/>}></Route>
    <Route path='/student/details/:studentid' element={<StudentDetails/>}></Route>
    <Route path='/student/edit/:studentid' element={<StudentEdit/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
