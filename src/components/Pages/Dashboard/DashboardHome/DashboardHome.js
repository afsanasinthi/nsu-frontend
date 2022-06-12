import React from 'react';
import Grid from '@mui/material/Grid/Grid';
import Complaints from '../Complaints/Complaints';
const DashboardHome = () => {
    return (
        <div className='container'>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Complaints></Complaints>
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;