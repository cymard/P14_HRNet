import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const formDataInitValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: 'dataA',
    zipCode: '',
    department: 'Sales',
};

const useAppStore = create(
    devtools(set => ({
        formData: formDataInitValues,
        setField: (name, value) =>
            set(state => ({
                ...state,
                formData: { ...state.formData, [name]: value },
            })),
        resetFormData: () =>
            set(state => ({
                ...state,
                formData: formDataInitValues,
            })),
        employees: [],
        addEmployee: employee =>
            set(state => ({
                ...state,
                employees: [...state.employees, employee],
            })),
        fetchEmployeesFromLocalStorage: () => {
            const employeesString = localStorage.getItem('employees');
            const employeesData = employeesString ? JSON.parse(employeesString) : [];
            return set(state => ({ ...state, employees: employeesData }));
        },
    }))
);

export default useAppStore;
