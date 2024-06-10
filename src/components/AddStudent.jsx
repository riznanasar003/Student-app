import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddStudent = () => {
    const [data,setData] = useState(

        {

            "name": "",
            "admno": "",
            "college": "",
            "dob": "",
            "emailid": ""
            

        }

    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }

        const readValue = ()=>{
            console.log(data)
        }

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form label" >Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Admission No</label>
                                <input type="text" className="form-control" name="admno" value={data.admno} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <label htmlFor="" className="form-label" >College Name</label>
                                <input type="text" className="form-control" name="college" value={data.college} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >D.O.B</label>
                                <input type="date" id="" className="form-control" name="dob" value={data.dob} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label" >Email Id</label>
                                <input type="text" className="form-control" name="emailid" value={data.emailid} onChange={inputHandler}/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddStudent