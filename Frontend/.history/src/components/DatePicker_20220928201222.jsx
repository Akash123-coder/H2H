import React from 'react'
import Datepicker from "flowbite-datepicker/Datepicker";
import { Box } from '@mui/system';
import { DateRangePicker } from '@mui/lab';
function DatePicker() {

  const [value, setalue] = useState(second)
  return (
    
    <div>
        <Box width="500px">
          <DateRangePicker
          startText="checkIn"
          endText="checkout"
          value={value}
          onChange={(newValue)=>{setValue(newValue)}}
          ></DateRangePicker>
          
        </Box>

    </div>
  )
}

export default DatePicker