import * as Yup from 'yup';

const onlyLettersRegex = /^[a-zA-Z\s]*$/;
const onlyLettersMessage = 'This field must contain only letters';
const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
const dateFormatMessage = 'Date must be in MM/DD/YYYY format';

const employeeSchema = Yup.object().shape({
    firstName: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('First name is required'),
    lastName: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('Last name is required'),
    dateOfBirth: Yup.string().matches(dateFormatRegex, dateFormatMessage).required('Date of birth is required'),
    startDate: Yup.string().matches(dateFormatRegex, dateFormatMessage).required('Start date is required'),
    department: Yup.string()
        .oneOf(
            ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'],
            'This field must be one of the following: Sales, Marketing, Engineering, Human Resources, Legal'
        )
        .required('Department is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('City is required'),
    state: Yup.string().matches(onlyLettersRegex, onlyLettersMessage).required('State is required'),
    zipCode: Yup.number()
        .min(9999, 'Zip code is too short')
        .max(100000, 'Zip code is too long')
        .typeError('Zip code must be a number')
        .required('Zip code is required'),
});

export default employeeSchema;
