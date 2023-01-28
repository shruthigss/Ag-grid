import React from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { useState, useMemo, useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import 'ag-grid-enterprise';


function Table() {

    const gripRef = useRef();

    const [rowData, setRowData] = useState([
        {make: "Ford", model:"Focus", price:"40000"},
        {make: "BMW", model:"Focus", price:"50000"},
        {make: "Audo", model:"Focus", price:"60000"}
    ])

    const [columnDefs, setColumnDefs] = useState([
        { field: "make", checkboxSelection: true },
        { field: "model" },
        { field: "price" }
    ])

    const defaultColdef = useMemo(() => ({
        sortable: true,
        filter: true,
        enableRowGroup: true,
        floatingFilter: true,
        flex: 1
    }), [])

    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
            console.log(rowData);
    },[])
    
    const pushMeClicked = useCallback(e => {
        gripRef.current.api.deselectAll();
    })
    return (
        <div>
            <div className="ag-theme-alpine" style={{ height: 500 }}>
                <button onClick={pushMeClicked}>Push Me</button>
                <AgGridReact
                    rowData={rowData}
                    rowGroupPanelShow="always"
                    rowSelection="multiple"
                    animateRows={true}
                    pagination={true}
                    paginationPageSize={8}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColdef} />
            </div>
        </div>
    )
}

export default Table;