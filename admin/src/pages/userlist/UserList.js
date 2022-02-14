
import React, { useEffect, useState } from 'react';
import "./UserList.css"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from "axios"





const UserList = () => {
  const [data, setuserData] = useState([])

  // get all user data
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/users", {
        headers: {
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDM1M2QyMzE2MzAzZTMwOGIwYTAxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDczNDYzMCwiZXhwIjoxNjQ1MTY2NjMwfQ.E3TKGuILa-XpMdf3HMiz9plBwqxYytjhZbOG9GJCwDM"
        }
      })
      setuserData(res.data);
    }
    getUser()
  }, [])
  console.log(data);



  // <img src={user.profilePic || "https://cdn2.vectorstock.com/i/thumb-large/96/76/avatar-vector-32409676.jpg"} alt="avtar" />

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username', headerName: 'Username', width: 270,
      renderCell: (params) => {
        return (
          <>
            <div className='userListuser'>
              {/* <img src={params.row.img} alt="avtar" /> */}
              <img src={params.row.img || "https://cdn2.vectorstock.com/i/thumb-large/96/76/avatar-vector-32409676.jpg"} alt="avtar" />
              {params.row.username}
            </div>

          </>

        )
      }
    },
    { field: 'email', headerName: 'Email', width: 240 },
    { field: 'createdAt', headerName: 'CreatedAt', width: 240 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (

          <>
            <Link to={"/user/" + params.row._id}>
              <button className='button_Edit'>Edit</button>
            </Link>
          </>

        )
      }

    },
  ];




  return (
    <>

      <div className="container-fluid userList ">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <h3 className='text-center  userTitle'>All users</h3>

            <div style={{ height: 600, width: '100%' }}>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={11}
                rowsPerPageOptions={[11]}
                disableSelectionOnClick
                checkboxSelection
                getRowId={(row) => row._id}
              />
            </div>
          </div>
        </div>


      </div>





    </>
  )
};

export default UserList;
