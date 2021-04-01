import React, {useState} from 'react'
import UploadXML from './uploadXML/uploadXML'
import axios from 'axios';
import {Typography} from '@material-ui/core'
// import { useForm } from "react-hook-form";
import './FormManager.css'

const FormManager = () => {
    const [xmlFile, setXMLFile] = useState(null);

    const uploadXML = (file) => {
        setXMLFile(file[0]);
    }
    const onSubmitNewXML = async () => {
        try {
            let form = new FormData();
            form.append("file", xmlFile);
            const res = await axios.post(`http://localhost:3001/api/SDCForm`, form);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="manager-base">
            <Typography>
                Upload XML
            </Typography>
            <UploadXML onSubmit={onSubmitNewXML} onUpload={uploadXML} id={3} />
        </div>
    )
}

export default FormManager;