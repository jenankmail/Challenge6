import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  
<Paper sx={{ m: 1, width: 100, height: 100 ,backgroundColor:"red"}}color="red" >
hello wolr

  </Paper>
 
);

export default function SimpleCollapse() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
    <Switch checked={checked} onChange={handleChange} />

    
     
        <div>
          <Collapse in={checked} collapsedSize={40} >
            {icon}
          </Collapse>
        </div>
    
</>
  );
}