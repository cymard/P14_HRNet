import { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import './dateOfBirthField.scss';

const DateOfBirthField = ({ setErrors, errors, handleChange, id, name, value, children }) => {
    const [fieldValue, setFieldValue] = useState(new Date());

    const localHandleChange = (value) => {
        setFieldValue(value);
        setErrors({ ...errors, dateOfBirth: '' })
        handleChange({ target: { name, value } });
    }

    const handleInvalidChange = () => setErrors({ ...errors, dateOfBirth: 'Invalid date' });

    return (
        <div className="d-flex flex-column mb-3">
            <label className="form-label" htmlFor={id}>
                {children}
            </label>

            <DateTimePicker
                id={id}
                className="w-25"
                name={name}
                onChange={localHandleChange}
                value={value}
                disableClock={true}
                format="dd/MM/yyyy"
                onInvalidChange={handleInvalidChange}
            />
            {errors.dateOfBirth !== '' && <span className="text-danger form-text">{errors.dateOfBirth}</span>}
        </div>
    );
};

export default DateOfBirthField;
