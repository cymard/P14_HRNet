import { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import { AgGridReact } from 'ag-grid-react';
import useAppStore from '../../stores/appStore.js';

import './employeeList.scss';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const EmployeeList = () => {
    const { employees, fetchEmployeesFromLocalStorage } = useAppStore();
    const [rowData, setRowData] = useState();
    const [quickFilter, setQuickFilter] = useState('');

    const defaultColDef = useMemo(
        () => ({
            sortable: true,
            filter: true,
            resizable: true,
        }),
        []
    );

    useEffect(() => {
        fetchEmployeesFromLocalStorage();
    }, [fetchEmployeesFromLocalStorage]);

    useEffect(() => {
        setRowData(employees);
    }, [employees]);

    const [columnDefs] = useState([
        { field: 'firstName' },
        { field: 'lastName' },
        { field: 'startDate' },
        { field: 'department' },
        { field: 'dateOfBirth' },
        { field: 'street' },
        { field: 'city' },
        { field: 'state' },
        { field: 'zipCode' },
    ]);

    return (
        <div className="container">
            <Header>Current Employees</Header>
            <div className="row mb-2">
                <div className="col-auto">
                    <Link className="btn btn-outline-secondary" to="/">
                        Home
                    </Link>
                </div>
                <div className="col-auto">
                    <div className="row">
                        <div className="col-auto">
                            <label className="col-form-label" htmlFor="quick-filter">
                                Search
                            </label>
                        </div>
                        <div className="col-auto">
                            <input
                                className="form-control"
                                id="quick-filter"
                                type="text"
                                value={quickFilter}
                                onChange={e => setQuickFilter(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="ag-theme-alpine ag-grid-container">
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    animateRows={true}
                    paginationAutoPageSize={true}
                    pagination={true}
                    defaultColDef={defaultColDef}
                    quickFilterText={quickFilter}
                ></AgGridReact>
            </div>
        </div>
    );
};

export default EmployeeList;
