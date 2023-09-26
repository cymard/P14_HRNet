import { useEffect, useState } from 'react';
import useAppStore from '../../stores/appStore.js';
import employeeValidation from '../../validation/employeeValidation.js';
import './createEmployeeForm.scss';

const CreateEmployeeForm = () => {
    const { formData, setField, resetFormData, employees, setEmployees } = useAppStore();
    const initFormInputs = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    }
    const [errors, setErrors] = useState(initFormInputs);

    useEffect(() => {
        const employeesString = localStorage.getItem('employees');
        const employeesData = employeesString ? JSON.parse(employeesString) : [];
        employeesData.map(employee => setEmployees(employee));
    }, [setEmployees]);

    const handleChange = e => {
        const { name, value } = e.target;

        employeeValidation
            .validateAt(name, { [name]: value })
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.message }));
        setField(name, value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        employeeValidation
            .validate(formData)
            .then(() => {
                setErrors(initFormInputs);
                setEmployees(formData);
                const employeesData = [...employees, formData];
                localStorage.setItem('employees', JSON.stringify(employeesData));
                resetFormData();
            })
            .catch(err => {
                setErrors({ ...errors, [err.path]: err.message });
            });

        // TODO déclencher la modal
    };

    return (
        <form onSubmit={e => handleSubmit(e)} action="#" id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input
                className={errors.firstName !== '' ? 'input-error' : undefined}
                onChange={e => handleChange(e)}
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
            />
            {errors.firstName !== '' && <span>{errors.firstName}</span>}

            <label htmlFor="last-name">Last Name</label>
            <input
                className={errors.lastName !== '' ? 'input-error' : undefined}
                onChange={e => handleChange(e)}
                type="text"
                id="last-name"
                name="lastName"
                value={formData.lastName}
            />
            {errors.lastName !== '' && <span>{errors.lastName}</span>}

            <label htmlFor="date-of-birth">Date of Birth</label>
            <input
                className={errors.dateOfBirth !== '' ? 'input-error' : undefined}
                onChange={e => handleChange(e)}
                id="date-of-birth"
                type="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
            />
            {errors.dateOfBirth !== '' && <span>{errors.dateOfBirth}</span>}

            <label htmlFor="start-date">Start Date</label>
            <input
                className={errors.startDate !== '' ? 'input-error' : undefined}
                onChange={e => handleChange(e)}
                id="start-date"
                type="text"
                name="startDate"
                value={formData.startDate}
            />
            {errors.startDate !== '' && <span>{errors.startDate}</span>}

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input
                    className={errors.street !== '' ? 'input-error' : undefined}
                    onChange={e => handleChange(e)}
                    id="street"
                    type="text"
                    name="street"
                    value={formData.street}
                />
                {errors.street !== '' && <span>{errors.street}</span>}

                <label htmlFor="city">City</label>
                <input
                    className={errors.city !== '' ? 'input-error' : undefined}
                    onChange={e => handleChange(e)}
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                />
                {errors.city !== '' && <span>{errors.city}</span>}

                <label htmlFor="state">State</label>
                <select
                    className={errors.state !== '' ? 'input-error' : undefined}
                    onChange={e => handleChange(e)}
                    id="state"
                    name="state"
                    value={formData.state}
                ></select>
                {errors.state !== '' && <span>{errors.state}</span>}

                <label htmlFor="zip-code">Zip Code</label>
                <input
                    className={errors.zipCode !== '' ? 'input-error' : undefined}
                    onChange={e => handleChange(e)}
                    id="zip-code"
                    type="number"
                    name="zipCode"
                    value={formData.zipCode}
                />
                {errors.zipCode !== '' && <span>{errors.zipCode}</span>}
            </fieldset>

            <label htmlFor="department">Department</label>
            <select
                className={errors.department !== '' ? 'input-error' : undefined}
                onChange={e => handleChange(e)}
                id="department"
                name="department"
                value={formData.department}
            >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
            </select>
            {errors.department !== '' && <span>{errors.department}</span>}
            <button type="submit">Save</button>
        </form>
    );
};

export default CreateEmployeeForm;
