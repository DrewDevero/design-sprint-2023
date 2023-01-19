import './App.css';
import ScrollNav from './scrollNav';
import Hero from './hero';
import Images from './images';
import Model from './model';
import TextOne from './textOne';
import TextTwo from './textTwo';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className='nav'>
          <ScrollNav />
        </nav>
        <section id="title">
          <h3>Harris Tweed<span>&#174;</span></h3>
          <h4>Bringing Families Together</h4>
        </section>
        <Hero />
      </header>
      <section>
        <TextOne />
      </section>
      <section>
        <Images />
      </section>
      <section className="model-area">
        <TextTwo />
        <Model />
      </section>
      <section>
        
      </section>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
