import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="logo">
      <Logo/>
      <Header/>
      <Footer title="Facebook" website="www.facebook.com" address="Bangkok" postcode={10210} status={true} />
      <Sidebar/>
      <Menu/>
    </div>
  );
}

export default App;
