import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
    return (
        <div className="container">
            <Header>Current Employees</Header>
            <div>Datatable</div>
            <Link to="/">Home</Link>
        </div>
    );
};

export default EmployeeList;
