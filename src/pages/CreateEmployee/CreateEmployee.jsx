import Header from '../../components/Header/Header';
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm.jsx';
import { Link } from 'react-router-dom';

const CreateEmployee = () => {
    return (
        <>
            <Header>HRnet</Header>
            <Link to="/employee-list" className="ms-3">
                View Current Employees
            </Link>
            <div className="bg-light col-10 container px-4 py-3 rounded-4 my-4">
                <h2>Create Employee</h2>
                <CreateEmployeeForm />
            </div>
            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </>
    );
};

export default CreateEmployee;
