import './App.css';
import UserForm from './components/UserDataForm/UserForm.js';
import Counter from './components/counter/Counter.js';
import TextEditor from './components/richTextEditor/RichTextEditor.js';
import { Grid } from '@mui/material';
import FluidAnimation from './components/animations/fluidAnimation.js';
import SmoothAnimation from './components/animations/smoothAnimation.js';
import Bezeircurve from './components/animations/bezeirCurve.js';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ width: '100%', height: '300px' }}>
              <Counter />
            </Grid>
            <Grid item xs={6} style={{ width: '100%', height: '200px' }}>
              <TextEditor />
            </Grid>
          </Grid>
        </Grid>
        {/* User Form below Counter and Text Editor */}
        <Grid item xs={12} > 
          <UserForm />
        </Grid>
        <Grid item xs={12} >
             <FluidAnimation/>
             <SmoothAnimation/>
            <Bezeircurve/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
