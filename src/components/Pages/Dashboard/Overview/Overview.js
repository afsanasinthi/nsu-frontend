import React from 'react';
import { Grid } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';
const Overview = () => {
    const [reviewers, setReviewers] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/reviewers')
            .then(res => res.json())
            .then(data => setReviewers(data))
    }, []);
    const { user } = useAuth();
    const [complaints, setComplaints] = React.useState([]);

    React.useEffect(() => {
        const url = `http://localhost:5000/complaints?complainerEmail=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComplaints(data));
    }, [])
    return (
        <div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="container">
                <Grid item xs={4} className="shadow p-5">
                    <h5>Total Reviewers</h5>
                    <p className='fs-1'>{reviewers.length}</p>
                </Grid>
                <Grid item xs={4} className="shadow p-5">
                    <h5>Total Complaints</h5>
                    <p className='fs-1'>{complaints.length}</p>
                </Grid>
                <Grid item xs={4} className="shadow p-5">
                    <h5>Total Reviewed complaints</h5>
                    <p className='fs-1'>{user.length}</p>
                </Grid>

            </Grid>
        </div>
    );
};

export default Overview;