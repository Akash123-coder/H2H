import React from 'react'
import { Box } from '@mui/system';
import { DateRangePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import { useState } from 'react';
function DatePicker() {

  const [value, setValue] = useState([null,null])
  return (
    <div>
      <Box width="500px">
        <DateRangePicker
          startText="checkIn"
          endText="checkout"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>To</Box>
              <TextField {...endProps} />
            </>
          )}
        ></DateRangePicker>
      </Box>
    </div>
  );
}

export default DatePicker