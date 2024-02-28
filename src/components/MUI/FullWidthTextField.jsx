import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

FullWidthTextField.propType = {
    labelName: PropTypes.string,
    required: PropTypes.string
}

export default function FullWidthTextField(props) {
    return (
        <>
            <label htmlFor="" className={`${props.required} fs-6 font-bold`}>{props.labelName}</label>
            <TextField fullWidth label="fullWidth" id="fullWidth" size='small' />
        </>
    );
}
