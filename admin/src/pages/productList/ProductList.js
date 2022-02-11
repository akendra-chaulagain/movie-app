import './ProductList.css'
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { productRows } from "../../DummyData"



// this page exported and render to product page in sidebar
const ProductList = () => {
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
                        <Link to={"/product/" + params.row.id}>
                            <button className='button_Edit'>Edit</button>
                        </Link>
                        <DeleteOutline className='delete-Btn' onClick={() => handleDelete(params.row.id)} />
                    </>

                )
            }

        },
    ];




    return (
        <>
            <div className="productList">
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
        </>
    )
};

export default ProductList;