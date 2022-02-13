import './MovieList.css'
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from 'axios';
import { deleteMovie } from '../../context/movieContext/apiCalls';
import { useContext } from 'react';
import { MovieContext } from '../../context/movieContext/MovieContext';



// this page exported and render to product page in sidebar
const MovieList = () => {
    const [data, setData] = useState([])
    const { movies, dispatch } = useContext(MovieContext)


    useEffect(() => {
        const getAllMovie = async () => {
            try {
                const res = await axios.get("/movies", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
                    }
                })
                setData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllMovie()
    }, [])





    // delete movie data by usimg context api from the movieContext

    const handelDelete = async (id) => {
        deleteMovie(id, dispatch)
        alert("Movie deleted")

    }


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
                        {/* edit  movie data */}
                        < Link to={`/movie/` + params.row._id}>
                            <button className='button_Edit'>Edit</button>
                        </ Link>
                        {/* delete user data */}
                        < DeleteOutlined style={{ color: "red", fontSize: 30, cursor: 'pointer' }}
                            onClick={() => handelDelete(params.row._id)}
                        />

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
                                rowsPerPageOptions={[5]}
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
