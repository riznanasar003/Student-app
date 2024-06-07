import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAll = () => {
    const [data, changeData] = useState(

        [
            { "Name": "Aryan", "Admno": 101, "Dept": "CS" },
            { "Name": "Kevin", "Admno": 102, "Dept": "CS" },
            { "Name": "Zara", "Admno": 103, "Dept": "CS" }
        ]
    )
    return (
        <div>

            <NavigationBar />
            <div className="container">
                <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                            <div class="card">
                                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.Name}</h5>
                                                    <p class="card-text">Admission No: {value.Admno}</p>
                                                    <p class="card-text">Department: {value.Dept}</p>
                                                    <a href="#" class="btn btn-primary">View Details</a>
                                                </div>
                                            </div>

                                        </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll