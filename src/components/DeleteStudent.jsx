import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const DeleteStudent = () => {
    const [data,setData] = useState(
        {
            "admno":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>
        console.log(data)
  return (
    <div>
        <NavigationBar/>
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="fom-label">Admission No</label>
                            <input type="text" className="form-control" name="admno" value={data.admno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DeleteStudent