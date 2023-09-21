import CreateEmployee from './pages/CreateEmployee/CreateEmployee.jsx';
import EmployeeList from './pages/EmployeeList/EmployeeList.jsx';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
    );
};

export default Router;
