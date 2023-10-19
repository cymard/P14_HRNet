import * as Yup from 'yup';

const onlyLettersRegex = /^[a-zA-Z\s]*$/;
const onlyLettersMessage = 'This field must contain only letters';

const employeeSchema = Yup.object().shape({
    firstName: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('First name is required'),
    lastName: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('Last name is required'),
    dateOfBirth: Yup.date().required('Date of birth is required'),
    startDate: Yup.date().required('Start date is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('City is required'),
    zipCode: Yup.number()
        .min(9999, 'Zip code is too short')
        .max(100000, 'Zip code is too long')
        .typeError('Zip code must be a number')
        .required('Zip code is required'),
});

export default employeeSchema;
