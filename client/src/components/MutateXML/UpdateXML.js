import { DropzoneDialog } from 'material-ui-dropzone'
import React, {useState} from 'react'
// import {} from 'material-ui-dropzone'
import { Button, TextField } from '@material-ui/core';

const MutateXML = (props) => {
    const [open, setOpen] = useState(false)


    const { onSubmit, formId } = props;
    return (
        <form onSubmit={onSubmit}>
            <TextField variant="outlined" name={formId} id="standard-basic" label="Form Name" />
            <Button style={{
                marginLeft: '20px',
            }} variant="contained" onClick={() => setOpen(true)}>Add Updated XML</Button>
            <Button style={{
                // marginTop: "12px",
                marginLeft: '20px',
            }} variant="contained" onClick={onSubmit}>Submit</Button>
            <DropzoneDialog
                    open={open}
                    // onSave={this.handleSave.bind(this)}
                    // acceptedFiles={['application/xml']}
                    // showPreviews={true}
                    // maxFileSize={5000000}
                    onClose={() => setOpen(false)}
                />
        </form>
    )
}

export default MutateXML;