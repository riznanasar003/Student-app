import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const SearchStudent = () => {
    const [data,setData] = useState(
        {
            "name":""
        }
    )
    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue = () =>{
        console.log(data)
    }
  return (
    <div>
    <NavigationBar/>
        <div className="container">
            <br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Student Name</label>
                            <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>Search</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchStudent