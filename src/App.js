import './App.css';
// import About from './components/About';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
    <Navbar title="TextUtils" />
    <div className="container">
    <TextForm heading="Enter the text below"/>
    {/* <About /> */}
    </div>
    </>
  )
}

export default App;