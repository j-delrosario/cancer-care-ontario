import React from 'react'
import {Button} from '@material-ui/core'
import { DropzoneArea } from 'material-ui-dropzone'
import './uploadXML.css'
const UploadXML = (props) => {
    const { onUpload, onSubmit } = props;
    return (
        <div >
            <DropzoneArea
                // acceptedFiles={['application/xml']}
                className="upload-base"
                onChange={onUpload}
                showAlerts
            />
            <Button style={{
                marginTop: '20px',
                marginBottom: "20px"
            }} variant="contained" onClick={onSubmit}>Submit</Button>
        </div>
    )
}

export default UploadXML;