import React from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
const UploadXML = (props) => {
    const { onUpload } = props;
    return (
        <DropzoneArea
            onChange={onUpload} />
    )
}

export default UploadXML;