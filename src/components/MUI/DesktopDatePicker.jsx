'use client';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import LocalizedFormat from 'dayjs/plugin/buddhistEra';
import OverwriteAdapterDayjs from '../dataAdapter';
import PropsType from 'prop-types'

dayjs.locale('th');
dayjs.extend(LocalizedFormat);

BasicDateTimePicker.propTypes = {
  labelName: PropsType.string.isRequired
}

export default function BasicDateTimePicker(props) {
  const [value, setValue] = React.useState(null);
  const dateFormat = 'D MMM YYYY';


  const handleChange = (val) => {
    setValue(val)
  };

  return (
    <div style={{ width: '100%' }}>
      <label htmlFor="" className={`${props.required} fs-6 font-bold`}>{props.labelName}</label>
      <LocalizationProvider dateAdapter={OverwriteAdapterDayjs} adapterLocale='th' dateFormats={{ monthAndYear: "MMMM BBBB" }}>
        <DesktopDatePicker
          sx={{ width: '100%', size: 'small', }}
          //   label={namLabel}
          format={dateFormat}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>
    </div>
  );
}