import React from 'react'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import FullWidthTextField from '../../../components/MUI/FullWidthTextField';
import DataTable from '../../../components/MUI/DataTables';
import BasicDateTimePicker from './../../../components/MUI/DesktopDatePicker';
import ActionManageCell from '../../../components/MUI/ActionManageCell';
import UserActionsCell from './../../../components/metronic/UserActionsCell';

export default function ComponenExample() {
    const headCells = [
        {
            columnName: 'ACTION',
            numeric: 'center',
            disablePadding: true,
            label: 'จัดการ',
            colWidth: 300
        },
        {
            columnName: 'name',
            numeric: 'center',
            disablePadding: true,
            label: 'Dessert (100g serving)',
            colWidth: 300
        },
        {
            columnName: 'calories',
            numeric: 'center',
            disablePadding: false,
            label: 'Calories',
            colWidth: 300
        },
        {
            columnName: 'fat',
            numeric: 'center',
            disablePadding: false,
            label: 'Fat (g)',
            colWidth: 300
        },
        {
            columnName: 'carbs',
            numeric: 'center',
            disablePadding: false,
            label: 'Carbs (g)',
            colWidth: 300
        },
        {
            columnName: 'protein',
            numeric: 'center',
            disablePadding: false,
            label: 'Protein (g)',
            colWidth: 300
        },
    ];


    const rows = [
        {
            ACTION: (<ActionManageCell element={{ name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 }} />), name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3
        },
        {
            ACTION: (<ActionManageCell element={{ name: 'koy', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 }} />), name: 'koy', calories: 305, fat: 3.7, carbs: 67, protein: 4.3
        },
        {
            ACTION: (<ActionManageCell element={{ name: 'kuy', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 }} />), name: 'kuy', calories: 305, fat: 3.7, carbs: 67, protein: 4.3
        },

    ];
    return (
        <div>
            <Paper className={'mb-8'}>
                <label htmlFor="" className='text-2xl font-bold py-1 px-5'>Example Component</label>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <FullWidthTextField labelName={'TextField'} required={'required'} />
                        </div>
                        <div className='col-md-4'>
                            <BasicDateTimePicker labelName='DateTimePicker' required={'required'} />
                        </div>
                        <div className='col-md-4'>
                            <FullWidthTextField labelName={'TextField'} required={'required'} />
                        </div>
                        <div className='col-md-12'>

                        </div>
                        <div className='col-md-12 py-9'>
                            <DataTable tableName="TEST TABLE" headCells={headCells} rows={rows} />
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
