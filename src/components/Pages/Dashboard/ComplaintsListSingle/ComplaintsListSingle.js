
import useAuth from '../../../../hooks/useAuth';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const ComplaintsListSingle = () => {
    const { complaintId } = useParams();
    const { user } = useAuth();
    const [complaints, setComplaints] = useState([]);
    // const complaintId = complaints.map(e => {  = e._id});
    useEffect((id) => {
        const url = `http://localhost:5000/complaints/complaintsSingle/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComplaints(data));
    }, [])
    return (
        <div className='container w-75 mt-4'>
            <h1>Complaints reviews</h1>
            <div className="row row-cols-1">

                {
                    complaints.map((complaint) => (

                        <div className="col mb-4" key={complaint._id}>
                            <div className="card mt-5">
                                {/* <img src={`data:image/*;base64,${proofText}`} class="card-img-top mx-auto mt-3" style={{ width: '100px', height: '100px' }} alt="" /> */}
                                <div class="card-body">
                                    <h5 className="card-title">Name: {complaint.complainerName}</h5>
                                    <p className="card-text">Subject: {complaint.subjectText}</p>
                                    {/* <p className="card-text">Description: {complaint.descriptionText} </p> */}
                                    <p className="card-text">Assign to: {complaint.assignTo} </p>
                                    <p className="card-text">Against Whom: {complaint.aggainstWhom} </p>

                                </div>

                            </div>
                        </div>

                    ))}
            </div>
        </div>
    );
};

export default ComplaintsListSingle;