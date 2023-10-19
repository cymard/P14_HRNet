import { useState } from 'react';
import useAppStore from '../../stores/appStore.js';
import employeeValidation from '../../validation/employeeValidation.js';
import TextField from '../TextField/TextField.jsx';
import NumberField from '../NumberField/NumberField.jsx';
import SelectField from '../SelectField/SelectField.jsx';
import DateOfBirthField from '../DateOfBirthField/DateOfBirthField.jsx';
import StartDateField from '../StartDateField/StartDateField.jsx';
import { Modal } from '@cymard/simple-react-modal-component';
import states from '../../json/states.json';

const CreateEmployeeForm = () => {
    const { formData, setField, resetFormData, employees, addEmployee } = useAppStore();
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
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e, isSkipValidation = false) => {
        const { name, value } = e.target;

        if (!isSkipValidation) {
            employeeValidation
                .validateAt(name, { [name]: value })
                .then(() => setErrors({ ...errors, [name]: '' }))
                .catch(err => setErrors({ ...errors, [name]: err.message }));
        }

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
                setIsOpen(true);
                resetFormData();
            })
            .catch(err => {
                setErrors({ ...errors, [err.path]: err.message });
            });
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} onExternalClick={() => setIsOpen(false)}>
                Employee Created!
            </Modal>
            <form onSubmit={e => handleSubmit(e)}>
                <TextField error={errors.firstName} handleChange={handleChange} id="first-name" name="firstName" value={formData.firstName}>
                    First Name
                </TextField>

                <TextField error={errors.lastName} handleChange={handleChange} id="last-name" name="lastName" value={formData.lastName}>
                    Last Name
                </TextField>

                <DateOfBirthField
                    setErrors={setErrors}
                    errors={errors}
                    handleChange={handleChange}
                    id="date-of-birth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                >
                    Date of Birth
                </DateOfBirthField>

                <StartDateField
                    setErrors={setErrors}
                    errors={errors}
                    handleChange={handleChange}
                    id="start-date"
                    name="startDate"
                    value={formData.startDate}
                >
                    Start Date
                </StartDateField>

                <fieldset className="address bg-body-secondary border mb-3 p-4 rounded-4">
                    <legend>Address</legend>

                    <TextField error={errors.street} handleChange={handleChange} id="street" name="street" value={formData.street}>
                        Street
                    </TextField>

                    <TextField error={errors.city} handleChange={handleChange} id="city" name="city" value={formData.city}>
                        City
                    </TextField>

                    <SelectField handleChange={handleChange} id="state" name="state" options={states}>
                        State
                    </SelectField>

                    <NumberField error={errors.zipCode} handleChange={handleChange} id="zip-code" name="zipCode" value={formData.zipCode}>
                        Zip Code
                    </NumberField>
                </fieldset>

                <SelectField
                    handleChange={handleChange}
                    id="department"
                    name="department"
                    options={[
                        { value: 'Sales', label: 'Sales' },
                        { value: 'Marketing', label: 'Marketing' },
                        { value: 'Engineering', label: 'Engineering' },
                        { value: 'Human Resources', label: 'Human Resources' },
                        { value: 'Legal', label: 'Legal' },
                    ]}
                >
                    Department
                </SelectField>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </>
    );
};

export default CreateEmployeeForm;
