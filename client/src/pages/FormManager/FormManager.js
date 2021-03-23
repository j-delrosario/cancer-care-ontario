import React, {useState} from 'react'
import UploadXML from '../../components/uploadXML/uploadXML'
import MutateXML from '../../components/MutateXML/mutateXML'
import UpdateXML from '../../components/MutateXML/UpdateXML'
import axios from 'axios';
import {Typography} from '@material-ui/core'
// import { useForm } from "react-hook-form";
import './FormManager.css'

const FormManager = () => {
    const [xmlFile, setXMLFile] = useState(null);
    const [updatedXMLFile, setUpdatedXMLFile] = useState(null);
    const [deleteId, setDeleteId] = useState('');
    // const [updateId, setUpdateId] = useState('');

    const uploadXML = (file) => {
        // console.log(file)
        setXMLFile(file[0]);
    }
    const onSubmitNewXML = async () => {
        try {
            const res = await axios.post(`http://localhost:3001/api/SDCForm`, xmlFile);
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteXML = async () => {
        try {
            // Change to form name
            const res = await axios.delete(`http://localhost:3001/api/SDCForm/${deleteId}`, { data: "" });
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }

    const updateXML = async () => {
        // console.log("TEST")
        // Send a request to the backend to update a form with the ID given
    }

    const onSubmitUpdatedXML = async () => {
        // Send a request to the backend with the file
    }


    return (
        <div className="manager-base">
            <Typography>
                Upload XML
            </Typography>
            <UploadXML onSubmit={onSubmitNewXML} onUpload={uploadXML} id={3} />
            <Typography>
                Delete Form
            </Typography>
            <MutateXML onSubmit={deleteXML} setFormId={setDeleteId} id={1} />
            <Typography>
                Update Form
            </Typography>
            {/* <UploadXML onUpload={updateXML} id={3} /> */}
            <UpdateXML onSubmit={updateXML} id={2} />
        </div>
    )
}

export default FormManager;