import './App.css';
import Button from '@mui/material/Button'

export default function App() {
  return (
    <div className="app">
      <header className="App-header">
         <Button 
           href="https://www.thoughtlab.com/" 
           variant="contained" 
           color="primary"
           style={{
            fontSize: 27
           }}
           size="large">
            Check out ThoughtLab
         </Button>
      </header>
    </div>
  );
}
