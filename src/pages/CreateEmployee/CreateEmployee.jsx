import { useState } from 'react';
import Header from '../../components/Header/Header';
import CreateEmployeeForm from '../../components/CreateEmployeeForm/CreateEmployeeForm.jsx';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal.jsx';

const CreateEmployee = () => {
    const [isOpen, setIsOpen] = useState(false);
    // TODO Enlever l'utilisation de modal ici
    return (
        <>
            <Header>HRnet</Header>
            <Link to="/employee-list" className="btn btn-outline-secondary ms-3">
                View Current Employees
            </Link>
            <div className="bg-light col-10 container px-4 py-3 rounded-4 my-4">
                <h2>Create Employee</h2>
                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    onExternalClick={() => setIsOpen(false)}
                >
                    Message de la modal
                </Modal>
                <button onClick={() => setIsOpen(true)}>Open modal</button>
                <CreateEmployeeForm />
            </div>
            <div id="confirmation" className="modal">
                Employee Created!
            </div>
        </>
    );
};

export default CreateEmployee;
