import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';
import Select from 'react-select';
import { Alert, AlertTitle } from '@mui/material'
// import OnSelectResetsInput from '../OnSelectResetsInput/OnSelectResetsInput';
// import Multiselect from 'multiselect-react-dropdown';
import './StudentHome.css';

const StudentHome = (complain) => {
    const data = [
        { label: "MD.monir islam", value: 1 },
        { label: "Hredoy Khan Reviewer", value: 2 },
        { label: "Karim Reviewer3", value: 3 },
        { label: "Mita Reviewer4", value: 4 },
        { label: "Rubi Reviewer5", value: 5 },
        { label: "Wasi Reviewer6", value: 6 }
    ];
    const aggainstWhomData = [
        { label: "MD.monir islam", value: 1 },
        { label: "Hredoy Khan Reviewer", value: 2 },
        { label: "Karim Reviewer3", value: 3 },
        { label: "Mita Reviewer4", value: 4 },
        { label: "Rubi Reviewer5", value: 5 },
        { label: "Wasi Reviewer6", value: 6 }
    ];
    const [submitSuccess, setSubmitSuccess] = useState(false);
    // const { name, subject, description } = complain;
    const { user } = useAuth();
    const initialInfo = { complainerName: user.displayName, complainerEmail: user.email, subjectText: '', descriptionText: '' }
    const [complainInfo, setComplainInfo] = useState(initialInfo);
    const [assignTo, setAssignTo] = useState([]);
    const [aggainstWhom, setAggainstWhom] = useState([]);
    const [proofText, setProofText] = useState(null);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...complainInfo };
        newInfo[field] = value;
        console.log(newInfo);
        setComplainInfo(newInfo);

    }
    const handleOnChange = e => {
        setAssignTo(Array.isArray(e) ? e.map(x => x.label) : []);
        console.log(assignTo);
    }
    const handleAggainstWhom = e => {
        setAggainstWhom(Array.isArray(e) ? e.map(x => x.label) : []);
        console.log(aggainstWhom);
    }

    const handleComplainSubmit = e => {
        e.preventDefault();
        alert('successfully submited');
        const complaintData = { ...complainInfo, assignTo, aggainstWhom, proofText }
        const formData = new FormData();
        formData.append('complainerName', complainInfo.complainerName);
        formData.append('complainerEmail', complainInfo.complainerEmail);
        formData.append('subjectText', complainInfo.subjectText);
        formData.append('descriptionText', complainInfo.descriptionText);
        formData.append('proofText', proofText);
        formData.append('assignTo', assignTo);
        formData.append('aggainstWhom', aggainstWhom);
        console.log(formData);

        fetch('http://localhost:5000/complaints', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSubmitSuccess(true);
                    console.log(data);
                }
                // console.log(data);
            })


        // handleComplainClose();


    }

    return (
        <div className='mt-5'>
            <h1>Complaint Form</h1>
            {submitSuccess && <Alert severity="success" className="mb-2 fw-bold">
                <AlertTitle>Successfully submitted</AlertTitle>
                {submitSuccess}
            </Alert>}

            <Form className='p-5 complaintForm' onSubmit={handleComplainSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" defaultValue={user.displayName} name="complainerName" onBlur={handleOnBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={user.email} name="complainerEmail" onBlur={handleOnBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter Subject" name="subjectText" onBlur={handleOnBlur} />
                </Form.Group>
                <Select isMulti options={aggainstWhomData} className="dropdown" onChange={handleAggainstWhom} placeholder="AgainstWhom" />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="descriptionText" rows={8} placeholder="Description" onBlur={handleOnBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Proof</Form.Label>
                    <Form.Control type="file" name="proofText" onBlur={e => setProofText(e.target.files[0])} />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                {/* <OnSelectResetsInput name="assignTo" onBlur={handleOnBlur} /> */}
                {/* <Multiselect
                    name="assignTo"
                    // isObject={false}
                    // onKeyPressFn={function noRefCheck() { }}
                    // onRemove={function noRefCheck() { }}
                    // onSearch={function noRefCheck() { }}
                    // onSelect={function noRefCheck() { }}
                    selectionLimit="3"
                    displayValue="label"
                    options={data}
                    onChange={handleOnChange}
                /> */}
                <Select isMulti options={data} className="dropdown" onChange={handleOnChange} placeholder="Select minimum 1 Reviwer" isOptionDisabled={() => assignTo.length >= 3} />
                <p>Reviewer selected: {assignTo + ""}</p>
                <p className='text-center pt-2'>----------- OR -------------</p>
                <NavLink to="/voice" className='btn btn-warning px-2 mb-2 text-light w-25 mx-auto'>Voice Complaint</NavLink>
                <Button variant="primary" type="submit" className='w-100'>
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default StudentHome;