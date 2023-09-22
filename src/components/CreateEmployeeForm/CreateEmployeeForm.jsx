import { useEffect } from 'react';
import useAppStore from '../../stores/appStore.js';

const CreateEmployeeForm = () => {
    const { formData, setField, resetFormData, employees, setEmployees } = useAppStore();

    useEffect(() => {
        const employeesString = localStorage.getItem('employees');
        const employeesData = employeesString ? JSON.parse(employeesString) : [];
        employeesData.map(employee => setEmployees(employee));
    }, [setEmployees]);

    const handleChange = e => {
        // TODO: verification de la data
        setField(e.target.name, e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setEmployees(formData);
        const employeesData = [...employees, formData];
        localStorage.setItem('employees', JSON.stringify(employeesData));
        resetFormData();
        // TODO déclencher la modal
    };

    return (
        <form onSubmit={e => handleSubmit(e)} action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input onChange={e => handleChange(e)} type="text" id="first-name" name="firstName" value={formData.firstName} />

            <label htmlFor="last-name">Last Name</label>
            <input onChange={e => handleChange(e)} type="text" id="last-name" name="lastName" value={formData.lastName} />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input onChange={e => handleChange(e)} id="date-of-birth" type="text" name="dateOfBirth" value={formData.dateOfBirth} />

            <label htmlFor="start-date">Start Date</label>
            <input onChange={e => handleChange(e)} id="start-date" type="text" name="startDate" value={formData.startDate} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input onChange={e => handleChange(e)} id="street" type="text" name="street" value={formData.street} />

                <label htmlFor="city">City</label>
                <input onChange={e => handleChange(e)} id="city" type="text" name="city" value={formData.city} />

                <label htmlFor="state">State</label>
                <select onChange={e => handleChange(e)} id="state" name="state" value={formData.state}></select>

                <label htmlFor="zip-code">Zip Code</label>
                <input onChange={e => handleChange(e)} id="zip-code" type="number" name="zipCode" value={formData.zipCode} />
            </fieldset>

            <label htmlFor="department">Department</label>
            <select onChange={e => handleChange(e)} id="department" name="department" value={formData.department}>
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            <button type="submit">Save</button>
        </form>
    );
};

export default CreateEmployeeForm;
