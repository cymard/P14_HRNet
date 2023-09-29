import Field from '../Field/Field.jsx';

const NumberField = ({ error, handleChange, id, name, value, children }) => {
    return (
        <Field type="number" error={error} handleChange={handleChange} id={id} name={name} value={value}>
            {children}
        </Field>
    );
};

export default NumberField;
