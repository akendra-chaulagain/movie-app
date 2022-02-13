import './MovieList.css'
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar';




export const productRows = [
    {
        id: 1,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    },
    {
        id: 2,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    }, {
        id: 3,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    }, {
        id: 4,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    }, {
        id: 5,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    }, {
        id: 6,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    }, {
        id: 7,
        name: 'Mobile',
        img: "../images/mobile.jpg",
        stock: 167,
        status: "active",
        price: "$500.00"
    },

];




// this page exported and render to product page in sidebar
const MovieList = () => {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'product',
            headerName: 'Product',
            width: 190,
            renderCell: (params) => {
                return (
                    <>
                        <div className="productListUser">
                            <img className='productListImg' src={params.row.img} alt="" />
                            {params.row.name}
                        </div>

                    </>

                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 240 },

        {
            field: 'price',
            headerName: 'Price',
            width: 160,

        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/movie/" + params.row.id}>
                            <button className='button_Edit'>Edit</button>
                        </Link>
                        <DeleteOutline className='delete-Btn'
                            onClick={() => handleDelete(params.row.id)}
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
                        <div className="ProductTitle text-center">All Products</div>

                        <div style={{ height: 450, width: '100%' }}>
                            <DataGrid
                                rows={data}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={6}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
};

export default MovieList;
