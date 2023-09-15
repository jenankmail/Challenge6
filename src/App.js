import logo from './logo.svg';
import './App.css';
import ColorButtons from './ColorButtons';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import BasicAccordion from './BasicAccordion';
import SimpleCollapse from './SimpleCollapse';
import ChallengeInClass from './ChallengeInClass';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
     <div className="App" style={{display:"flex",justifyContent:"center", marginTop:"150px"}}>
<BasicAccordion />

      </div>
   //<div>
   
     // <ChallengeInClass />
      //</div>
  );
}

export default App;
