import './App.css';
import Navigate from './navbar';
import GetMovies from './components/GetMovies';
import Footer from './footer';

function App() {
  return (
    <div>
      <Navigate/>
      <GetMovies/>
      <Footer/>
    </div>
  );
}

export default App;
