import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./List.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import axios from 'axios'


const List = () => {
    const [data, setData] = useState([])


    // get lists from the database routes/lists.js
    useEffect(() => {
        const getList = async () => {
            try {
                const res = await axios.get("/lists/", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                    }
                })
                setData(res.data);
            } catch (error) {
                console.log(error);

            }
        }
        getList();

    }, [])


    const columns = [
        { field: "_id", headerName: "ID", width: "250" },
        {
            field: 'movie', headerName: 'title', width: 270, renderCell: (params) => {
                return (
                    <div className='userListuser'>
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'genre', headerName: 'Genre', width: 130 },
        { field: 'types', headerName: 'Type', width: 170, },

        {
            field: 'action', headerName: 'Action', width: 130, renderCell: (params) => {
                return (
                    <>
                        {/* edit  movie data button*/}
                        < Link to={`/lists/` + params.row._id}>
                            <button className='button_Edit'>Edit</button>
                        </ Link>
                    </>
                )
            }
        },

    ];




    return (
        <>
            <div className="container-fluid list">
                <div className="row">
                    {/* side bar component */}
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 leftSideContainer">
                        <div className="ProductTitle text-center">All Movies</div>
                        <div style={{ height: 520, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                columns={columns}
                                pageSize={8}
                                rowsPerPageOptions={[8]}
                                disableSelectionOnClick
                                getRowId={(r) => r._id}
                            />
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default List