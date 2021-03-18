import React from 'react'
import UploadXML from '../../components/uploadXML/uploadXML'
import MutateXML from '../../components/MutateXML/mutateXML'
// import { useForm } from "react-hook-form";

const FormManager = (props) => {
    // const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = () => {
        console.log("TEST")
    }

    return (
        <div>
            <UploadXML onUpload={onSubmit} />
            <MutateXML onSubmit={onSubmit} id={1} />
        </div>
    )
}

export default FormManager;