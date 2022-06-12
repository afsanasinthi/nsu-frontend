// import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Reviewer from '../Reviewer/Reviewer';

const Reviewers = () => {
    const [reviewers, setReviewers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviewers')
            .then(res => res.json())
            .then(data => setReviewers(data))
    }, [])
    return (
        <div className='container w-75 mt-4'>
            <h1>Reviewers: {reviewers.length}</h1>
            <div class="row row-cols-1 row-cols-md-3">

                {
                    reviewers.map(reviewer => <Reviewer
                        key={reviewer._id}
                        reviewer={reviewer}>
                    </Reviewer>)
                }

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

export default Reviewers;