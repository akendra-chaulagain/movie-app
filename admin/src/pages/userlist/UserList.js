
import React, { useState } from 'react';
import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { userRows } from "../../DummyData"





const UserList = () => {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 170 },
        { field: 'email', headerName: 'Email', width: 240 },
        {
            field: 'status',
            headerName: 'Status',
            width: 190,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,

        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='button_Edit'>Edit</button>
                        </Link>
                        <DeleteOutline className='delete-Btn' onClick={()=>handleDelete(params.row.id)} />
                    </>

                )
            }

        },
    ];



    return (
        <>
            <div className="container-fluid UserList">
                <div className="row">
                    <div style={{ height: 450, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={6}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </>
    )
};

export default UserList;
