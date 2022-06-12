import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const Complaints = () => {
    const { user } = useAuth();
    const [complaints, setComplaints] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/complaints?complainerEmail=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComplaints(data));
    }, [])
    return (
        <div>
            <h2>Complaints : {complaints.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Subject</TableCell>
                            <TableCell align="right">AggainstWhom</TableCell>
                            {/* <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Proof</TableCell> */}
                            <TableCell align="right">Reviewer</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {complaints.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.complainerName}
                                </TableCell>
                                <TableCell align="right">{row.complainerEmail}</TableCell>
                                <TableCell align="right">{row.subjectText}</TableCell>
                                <TableCell align="right">{row.aggainstWhom}</TableCell>
                                {/* <TableCell align="right">{row.descriptionText}</TableCell> */}
                                {/* <TableCell align="right">{row.proofText}</TableCell> */}
                                <TableCell align="right">{row.assignTo}</TableCell>
                                {/* <TableCell align="right">{row.assignTo.map(assign => <span className='btn btn-warning px-2 me-2 fs-6'>{assign}</span>)}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Complaints;