import logo from './logo.svg';
import './App.css';
import Demo from'./components/Demo'
import ClassBasedcom from './components/classBasedcomponent'
import HooksInc from './component'
function App() {
  return (
    <div className="App">
      <h1>This is my second component</h1>
      <Demo></Demo>
      <Demo/>
      <Demo/>
      <k name="siri">APSSDC</k>
      <k name="jyothi">NEC</k>
      <Home/>
      <ClassBasedcom name="keerthi"/>
      <h1>Hooks concept</h1>
      
</div>
  );
}
let Home=()=>{
  return(
    <h1>this my Home componenet</h1>
  );
}

export default App;
