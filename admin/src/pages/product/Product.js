import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";
import Chart from '../../components/charts/Chart'
import { productData } from '../../DummyData';


const Product = () => {
    return (
        <>
            <div className="container-fluid product">
                <div className="row">
                    <div className="productContainerTitle">
                        <h1>Product</h1>
                        <Link to="/newproduct">
                            <button>Create</button>
                        </Link>
                    </div>
                    {/* top two boxes */}
                    <div className="col-md-6">
                        <div className="productTopLeft">
                            <Chart data={productData} dataKey="Sales" title="Sales Perfomance" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="productTopRight">
                            <div className="peoductInfoTop">
                                <img src="../images/mobile.jpg" alt="" />
                                <span className="productName">Mobile</span>
                            </div>
                            <div className="peoductInfoBottom">
                                <div className="productInfoItem">
                                    <span className='productInfoAvailable'>id:</span>
                                    <span>123</span>

                                </div>
                                <div className="productInfoItem">
                                    <span className='productInfoAvailable'>Sales:</span>
                                    <span>1253</span>

                                </div>

                                <div className="productInfoItem">
                                    <span className='productInfoAvailable'>active:</span>
                                    <span>yes</span>

                                </div>
                                <div className="productInfoItem">
                                    <span className='productInfoAvailable'>in Stock:</span>
                                    <span>no</span>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>


                {/* buttom */}
                <div className="productBottom mt-4">
                    <div className="container-fluid">
                        <div className="row">
                            <h4>Product Name</h4>
                            <div className="col-md-6">
                                <form className='productForm'>
                                    <input type="text" placeholder='Mobile' />
                                    <div className="productForm mt-3">
                                        <label htmlFor="">In Stock</label><br />
                                        <select name="active" id="active">
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                        </select>
                                    </div>
                                    <div className="productForm mt-3">
                                        <label htmlFor="">Active</label><br />
                                        <select name="active" id="active">
                                            <option value="yes">yes</option>
                                            <option value="no">no</option>
                                        </select>
                                    </div>
                                </form>

                            </div>
                            <div className="col-md-6">
                                <div className="productImg">
                                    <img src="../images/mobile.jpg" alt="" /><br />

                                    <button>Update</button>

                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
};

export default Product;
