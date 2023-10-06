import Select from 'react-select';

const SelectField = ({ handleChange, id, name, options, children }) => {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>
                {children}
            </label>

            <Select
                options={options}
                defaultValue={options[0]}
                onChange={e => handleChange({ target: { name: name, value: e.value } }, true)}
                id={id}
            />
        </div>
    );
};

export default SelectField;
