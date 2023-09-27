import Field from '../Field/Field.jsx';

const TextField = ({ error, handleChange, id, name, value, children }) => {
    return (
        <Field type="text" error={error} handleChange={handleChange} id={id} name={name} value={value}>
            {children}
        </Field>
    );
};

export default TextField;
