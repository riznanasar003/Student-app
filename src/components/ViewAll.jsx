import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAll = () => {
    const [data, changeData] = useState(

        [
            {

                "name": "Rizna",
                "admno": "678",
                "college": "FISAT",
                "dob": "10-03-2003",
                "emailid": "rizna123@gmail.com"


            }

        ]
    )
    return (
        <div>

            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">NAME</th>
                                            <th scope="col">ADMISSION NO</th>
                                            <th scope="col">COLLEGE</th>
                                            <th scope="col">DATE OF BIRTH</th>
                                            <th scope="col">EMAIL ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value, index)=>{
                                            return  <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.admno}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.emailid}</td>
                                        </tr>
                                        }
                                       )}
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll