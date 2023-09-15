import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';

const icon = (
  
  <Paper sx={{ m: 1,  height: 250 ,backgroundColor:"Orange" ,marginTop:"15px"}}color="red" >
 <Typography variant="h5" gutterBottom>
        hello world
      </Typography>
  
    </Paper>
   
  );
  
export default function BasicAccordion() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };
    return (
      <Container maxWidth="sm">
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Switch checked={checked} onChange={handleChange} />

          </Typography>
        </AccordionDetails>
      </Accordion>

      <div>
          <Collapse in={checked} collapsedSize={40} >
            {icon}
          </Collapse>
        </div>
        </div>
        </Container>
  );
}