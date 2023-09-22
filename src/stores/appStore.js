import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useAppStore = create(
    devtools(set => ({
        formData: {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            startDate: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            department: '',
        },
        setField: (name, value) =>
            set(state => ({
                ...state,
                formData: { ...state.formData, [name]: value },
            })),
        resetFormData: () =>
            set(state => ({
                ...state,
                formData: {
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    startDate: '',
                    street: '',
                    city: '',
                    state: '',
                    zipCode: '',
                    department: '',
                },
            })),
        employees: [],
        setEmployees: employee =>
            set(state => ({
                ...state,
                employees: [...state.employees, employee],
            })),
    }))
);

export default useAppStore;
