import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addemployee from './components/Addemployee';
import EmployeeList from './components/EmployeeList';
import UpdateEmployee from './components/UpdateEmployee';
function App() {

  return (
  <>
  <BrowserRouter>
    <Navbar/>

    <Routes>
          <Route index element={<EmployeeList />} />
          <Route path="/" element={<EmployeeList />}></Route>
          <Route path="/employeeList" element={<EmployeeList />} />
          <Route path="/addEmployee" element={<Addemployee />} />
          <Route path="/editEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
