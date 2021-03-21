import React, {useState} from 'react'
import UploadXML from '../../components/uploadXML/uploadXML'
import MutateXML from '../../components/MutateXML/mutateXML'
import UpdateXML from '../../components/MutateXML/UpdateXML'

import {Typography} from '@material-ui/core'
// import { useForm } from "react-hook-form";
import './FormManager.css'

const FormManager = () => {
    const [xmlFile, setXMLFile] = useState(null);
    // const { register, handleSubmit, watch, errors } = useForm();
    // const [formID, setFormID] = useState(null);

    const uploadXML = (file) => {
        // console.log(file)
        setXMLFile(file[0]);
    }

    const onSubmitNewXML = () => {
        // Send a request to the backend with the file
    }

    const deleteXML = () => {
        // Send a request to the backend to delete a form with the ID given
    }

    const updateXML = () => {
        // console.log("TEST")
        // Send a request to the backend to update a form with the ID given
    }

    const onSubmitUpdatedXML = () => {
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
            <MutateXML onSubmit={deleteXML} id={1} />
            <Typography>
                Update Form
            </Typography>
            {/* <UploadXML onUpload={updateXML} id={3} /> */}
            <UpdateXML onSubmit={updateXML} id={2} />
        </div>
    )
}

export default FormManager;