import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Logo/>
      <Header/>
      <Footer title="Facebook" website="www.facebook.com" address="Bangkok" postcode={10210} status={true} />
    </>
  );
}

export default App;
