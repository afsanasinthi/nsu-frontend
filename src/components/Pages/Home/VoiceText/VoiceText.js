import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useAuth from '../../../../hooks/useAuth';
import OnSelectResetsInput from '../OnSelectResetsInput/OnSelectResetsInput';
import './VoiceText.css';
const LANGUAGE_MAP = {
    'bangla': 'bn',
    'אנגלית': 'en-GB',
    'hebrew': 'he'
}

const VoiceText = () => {
    const { user } = useAuth();
    const [language, setLanguage] = useState('Bangla')
    const commands = Object.keys(LANGUAGE_MAP).map(language => ({
        command: language,
        callback: () => {
            setLanguage(LANGUAGE_MAP[language])
            SpeechRecognition.startListening({
                continuous: true,
                language: LANGUAGE_MAP[language]
            })
        },
        matchInterim: true
    }))
    const { transcript, resetTranscript, } = useSpeechRecognition({ commands })

    useEffect(() => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'bn'
        })
    }, [])

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    return (
        <div className='mt-5 mx-auto w-75 textAlign'>
            {/* <p className='fs-4 fw-bold'>Microphone: {listening ? 'on' : 'off'}</p> */}
            <button className='btn btn-warning m-2' onClick={SpeechRecognition.startListening}>Start</button>
            <button className='btn btn-danger m-2' onClick={SpeechRecognition.stopListening}>Stop</button>
            <button className='btn btn-success m-2' onClick={resetTranscript}>Reset</button>
            <span>language: {language}</span>
            {/* <span>{transcript}</span> */}
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={user.displayName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter Subject" />
            </Form.Group>
            <Form.Control as="textarea" rows={8} placeholder="Description" value={transcript} className="mb-2" />
            {/* <p>{transcript}</p> */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Proof</Form.Label>
                <Form.Control type="file" name="proofText" />
            </Form.Group>
            <OnSelectResetsInput />
            <Button variant="primary" type="submit" className='w-100 mt-3'>
                Submit
            </Button>
        </div>
    );
};


export default VoiceText;