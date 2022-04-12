import './MovieList.css'
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';



// this page exported and render to movies page in sidebar
const MovieList = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        const getAllMovie = async () => {
            try {
                const res = await axios.get("/movies", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGM2NzllN2UzMjZjZjIzZTBmNDJhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTE2Njk5NCwiZXhwIjoxNjQ1MjUzMzk0fQ.RcftddX44lNOgQa11V_tG540dOGet0fUzoOccSs3q3s"
                    }
                })
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMovie()
    }, [])

    

    const columns = [
        {
            field: 'movie', headerName: 'Movie', width: 230, renderCell: (params) => {
                return (
                    <div className='userListuser'>
                        <img src={params.row.img} alt="avtar" />
                        {params.row.title}
                    </div>
                )
            }
        },
        { field: 'genre', headerName: 'Genre', width: 130 },
        { field: 'year', headerName: 'year', width: 170, },
        { field: 'limit', headerName: 'Limits', width: 150, },
        { field: 'isSeries', headerName: 'isSeries', width: 150, },
        {
            field: 'action', headerName: 'Action', width: 130, renderCell: (params) => {
                return (
                    <>
                        {/* edit  movie data button*/}
                        < Link to={`/movie/` + params.row._id}>
                            <button className='button_Edit'>Edit</button>
                        </ Link>
                      

                    </>
                )
            }
        },

    ];

    return (

        <>
            <div className="container-fluid productList">
                <div className="row">
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
};

export default MovieList;
