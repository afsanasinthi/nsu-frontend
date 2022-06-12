import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Alert, Button, Input } from '@mui/material';
const AddReviewer = () => {
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            alert('please add a image');
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('designation', designation);
        formData.append('department', department);
        formData.append('email', email);
        formData.append('image', image);

        fetch('http://localhost:5000/reviewers', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Reviewer added successfully');
                    console.log('reviewer added successfully');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>Add Reviewer</h2>
            <form onSubmit={handleSubmit}>
                <TextField sx={{ width: '50%' }} type="text" label="Name" variant="standard" required onChange={e => setName(e.target.value)} /> <br />
                <TextField sx={{ width: '50%' }} type="text" label="Designation" variant="standard" required onChange={e => setDesignation(e.target.value)} /> <br />
                <TextField sx={{ width: '50%' }} type="text" label="Department" variant="standard" required onChange={e => setDepartment(e.target.value)} /> <br />
                <TextField sx={{ width: '50%' }} type="email" label="Email" variant="standard" required onChange={e => setEmail(e.target.value)} />
                <br />
                <Input
                    accept="image/*" type="file" required onChange={e => setImage(e.target.files[0])} /><br />
                <Button variant="contained" type="submit">
                    Add Review
                </Button>
                {success && <Alert severity="success">Reviewer added successfully!</Alert>}
            </form>
        </div>
    );
};

export default AddReviewer;