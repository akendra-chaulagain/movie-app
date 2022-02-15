
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./NewList.css"

const NewList = () => {
    return (
        <>
            <div className="container-fluid newList">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewList