import './App.css';
import MySoal1 from './MySoal1.jsx';

function App() {


  return (
    <>
    
    <header className="App-header">
        <h1 className='text-3xl font-bold underline'>BPHY</h1>
        <br/>
        <hr/>
    </header>
    <main className="h-auto bg-slate-200 overflow-scroll">
          <MySoal1 />
      
    </main>
    <footer className="App-header">
        <h1 className='text-2xl font-bold '>2023</h1>
        <br/>
      
        {/* <MyName name="irzal" /> */}
        
        <hr/>
    </footer>
    </>
  );
}

export default App;
