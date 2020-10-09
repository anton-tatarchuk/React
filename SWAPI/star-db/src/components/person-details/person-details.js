import React from 'react'

const PersonDetails = () => {
    return(
        <div className="person-details ">
            <div className="jumbotron row">
                <div className="person-details-image col-md-4">
                    <img src="https://cdni.rt.com/russian/images/2017.06/article/594e4840c46188182a8b473a.jpg" 
                         alt="" />
                </div>
                <div className="person-details-info col-md-8">
                    <h3>Person Name</h3>
                    <ul className="list">
                        <li className="list-item">
                            Gender <strong>122412</strong>
                        </li>
                        <li className="list-item">
                            Birth <strong>43</strong>
                        </li>
                        <li className="list-item">
                            Eye Color <strong>100</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PersonDetails