// import { Grid } from '@mui/material';
import React from 'react';

const Reviewer = ({ reviewer }) => {
    const { name, image, designation, department } = reviewer;
    return (

        <div class="col mb-4">
            <div class="card mt-5">
                <img src={`data:image/*;base64,${image}`} class="card-img-top mx-auto mt-3" style={{ width: '100px', height: '100px' }} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{designation}</p>
                    <p class="card-text">Department of {department}, North South University </p>
                </div>
            </div>
        </div>


    );
};

export default Reviewer;