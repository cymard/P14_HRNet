const Field = ({ type, error, handleChange, id, name, value, children }) => {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>
                {children}
            </label>
            <input
                className={'form-control ' + (error !== '' ? 'is-invalid' : undefined)}
                onChange={e => handleChange(e)}
                type={type}
                id={id}
                name={name}
                value={value}
                autoComplete="on"
            />
            {error !== '' && <span className="text-danger form-text">{error}</span>}
        </div>
    );
};

export default Field;
