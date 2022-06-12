
import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import ComplaintsListSingle from '../ComplaintsListSingle/ComplaintsListSingle';
const ComplaintsList = () => {
    const { user } = useAuth();
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/complaints?complainerEmail=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComplaints(data));
    }, [])
    return (
        <div className='container w-75 mt-4'>
            <h1>Complaints: {complaints.length}</h1>
            <div className="row row-cols-1 row-cols-md-2">

                {
                    complaints.map((complaint) => (

                        <div className="col mb-4" key={complaint._id}>
                            <div className="card mt-5">
                                <img src={`data:image/*;base64,${complaint.proofText}`} class="card-img-top mx-auto mt-3" style={{ width: '100px', height: '100px' }} alt="" />
                                <div class="card-body">
                                    <h5 className="card-title">Name: {complaint.complainerName}</h5>
                                    <p className="card-text">Subject: {complaint.subjectText}</p>
                                    {/* <p className="card-text">Description: {complaint.descriptionText} </p> */}
                                    {/* <p className="card-text">Assign to: {complaint.assignTo.map(assign => <span className='btn btn-primary px-2 me-2 fs-6'>{assign}</span>)} </p> */}
                                    <p className="card-text">Assign to: {complaint.assignTo} </p>
                                    {/* <p className="card-text">Against Whom: {complaint.aggainstWhom.map(assign => <span className='btn btn-warning px-2 me-2  mt-2 fs-6'>{assign}</span>)} </p> */}
                                    <p className="card-text">Against Whom: {complaint.aggainstWhom} </p>

                                </div>
                                <Link to={`/dashboardAdmin/ComplaintsListSingle/${complaint._id}`}><span className='btn btn-warning px-2 me-2  mt-2 fs-6'> ComplaintsList</span></Link>
                            </div>
                        </div>

                    ))}
                {/* <Button>Veiw</Button> */}
                {/* <Container>
                <Grid container spacing={5}>
                    {
                        reviewers.map(reviewer => <Reviewer
                            key={reviewer._id}
                            reviewer={reviewer}>
                        </Reviewer>)
                    }
                </Grid>
            </Container> */}


                {/* </div> */}
            </div>
        </div>
    );
};

export default ComplaintsList;