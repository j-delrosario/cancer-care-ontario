import React, {useState} from 'react'
import UploadXML from './uploadXML/uploadXML'
import axios from 'axios';
import {Typography} from '@material-ui/core'
// import { useForm } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';
import './FormManager.css'

const FormManager = () => {
    const [xmlFile, setXMLFile] = useState(null);
    const [alert, setAlert] = useState(null);

    const uploadXML = (file) => {
        setXMLFile(file[0]);
    }
    const onSubmitNewXML = async () => {
        try {
            let form = new FormData();
            form.append("file", xmlFile);
            await axios.post(`http://localhost:3001/api/SDCForm`, form);
            setAlert(<Alert severity="success">Form upload successfully!</Alert>)
        } catch (error) {
            setAlert(<Alert severity="error">There was an error uploading your form, {error}</Alert>)
        }
    }

    return (
        <div className="manager-base">
            <Typography style={{
                fontWeight: "bold"
            }}>
                Upload SDC Form from XML
            </Typography>
            <Typography>
                Uploading an SDC Form with a Diagnostic Procedure ID and version number that is already in the database will keep the SDC Form with the latest version number and deprecate the previous copy.
            </Typography>
            <UploadXML onSubmit={onSubmitNewXML} onUpload={uploadXML} id={3} />
            {alert}
        </div>
    )
}

export default FormManager;