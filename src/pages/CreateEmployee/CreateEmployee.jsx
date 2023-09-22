import Header from '../../components/Header/Header';
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm.jsx';

const CreateEmployee = () => {
    return (
        <>
            <Header>HRnet</Header>
            <div className="container">
                <a href="#">View Current Employees</a>
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
