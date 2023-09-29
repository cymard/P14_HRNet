import { useEffect, useState } from 'react';
import useAppStore from '../../stores/appStore.js';
import employeeValidation from '../../validation/employeeValidation.js';
import TextField from '../TextField/TextField.jsx';
import NumberField from '../NumberField/NumberField.jsx';
import SelectField from '../SelectField/SelectField.jsx';

const CreateEmployeeForm = () => {
    const { formData, setField, resetFormData, employees, addEmployee, fetchEmployeesFromLocalStorage } = useAppStore();
    const initialFormFieldErrors = {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
    };
    const [errors, setErrors] = useState(initialFormFieldErrors);

    useEffect(() => {
        fetchEmployeesFromLocalStorage();
    }, [fetchEmployeesFromLocalStorage]);

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
                setErrors(initialFormFieldErrors);
                addEmployee(formData);
                localStorage.setItem('employees', JSON.stringify([...employees, formData]));
                resetFormData();
            })
            .catch(err => {
                setErrors({ ...errors, [err.path]: err.message });
            });

        // TODO déclencher la modal
    };

    return (
        <form onSubmit={e => handleSubmit(e)} >
            <TextField error={errors.firstName} handleChange={handleChange} id="first-name" name="firstName" value={formData.firstName}>
                First Name
            </TextField>

            <TextField error={errors.lastName} handleChange={handleChange} id="last-name" name="lastName" value={formData.lastName}>
                Last Name
            </TextField>

            <TextField error={errors.dateOfBirth} handleChange={handleChange} id="date-of-birth" name="dateOfBirth" value={formData.dateOfBirth}>
                Date of Birth
            </TextField>

            <TextField error={errors.startDate} handleChange={handleChange} id="start-date" name="startDate" value={formData.startDate}>
                Start Date
            </TextField>

            <fieldset className="address bg-body-secondary border mb-3 p-4 rounded-4">
                <legend>Address</legend>

                <TextField error={errors.street} handleChange={handleChange} id="street" name="street" value={formData.street}>
                    Street
                </TextField>

                <TextField error={errors.city} handleChange={handleChange} id="city" name="city" value={formData.city}>
                    City
                </TextField>

                <SelectField
                    error={errors.state}
                    handleChange={handleChange}
                    id="state"
                    name="state"
                    value={formData.state}
                    options={['dataA', 'dataB', 'dataC', 'dataD', 'dataE']}
                >
                    State
                </SelectField>

                <NumberField error={errors.zipCode} handleChange={handleChange} id="zip-code" name="zipCode" value={formData.zipCode}>
                    Zip Code
                </NumberField>
            </fieldset>

            <SelectField
                error={errors.department}
                handleChange={handleChange}
                id="department"
                name="department"
                value={formData.department}
                options={['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal']}
            >
                Department
            </SelectField>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    );
};

export default CreateEmployeeForm;
