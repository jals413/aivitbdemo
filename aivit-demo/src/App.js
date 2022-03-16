import './App.css';
import Logo from './component/img';
import Nav from './component/nav';

function App() {
  return (<>
    <div className='main'>
      <Nav />
      <Logo />
      <div className='container'>
        <h4>VIT Bhopal University - AI & ML Division</h4>
        <h1>A R T I F I C I A L - I N T E L L I G E N C E</h1>
        <h1>C O N C L A V E - 2 0 2 2 </h1>
        <hr />
        <p id='date'>March 16-18, 2022 | Offline Mode | Auditorium</p>
        <button className="btn1"><a href={"https://grabify.link/C3MTNP"}>Register Now</a></button>
      </div>

    </div>
  </>
  );
}

export default App;
