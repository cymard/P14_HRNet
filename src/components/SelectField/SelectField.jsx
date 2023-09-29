const SelectField = ({ error, handleChange, id, name, value, options, children }) => {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>
                {children}
            </label>
            <select
                className={'form-select ' + (error !== '' ? 'is-invalid' : undefined)}
                onChange={e => handleChange(e)}
                id={id}
                name={name}
                value={value}
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {error !== '' && <span className="text-danger form-text">{error}</span>}
        </div>
    );
};

export default SelectField;
