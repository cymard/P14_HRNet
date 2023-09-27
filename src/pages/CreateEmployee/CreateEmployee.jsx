import Header from '../../components/Header/Header';
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm.jsx';

const CreateEmployee = () => {
    return (
        <>
            <Header>HRnet</Header>
            <a className="ms-3" href="#">
                View Current Employees
            </a>
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
