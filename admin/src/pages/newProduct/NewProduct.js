
import React from 'react';
import "./NewProduct.css"



const NewProduct = () => {
    return (
        <>
            <div className="newproduct">
                <div className="mewproductTitle">New User</div>
                <form className="addproductForm">

                    <div className="mt-5">
                        <label htmlFor="">Image</label><br />
                        <input type="file" id='file' />
                    </div>


                    <div className="inputField">
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder='Mobile' />
                    </div>



                    <div className="inputField">
                        <label htmlFor="">Stock</label><br />
                        <input type="number" placeholder='157' />
                    </div>


                    <div className="inputField">
                        <label htmlFor="">Active</label><br />
                        <select name="active" id="active">
                            <option value="yes">yes</option>
                            <option value="no">no</option>
                        </select>
                    </div>
                    {/* create btn */}
                    <div className="createnewButton">
                        <button >Create</button>
                    </div>


                </form>

            </div>
        </>
    )
};

export default NewProduct;
