import './App.scss';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import AuthContextProvider from './context/AuthContext';
import { Routes } from 'react-router-dom';
import Hero from './pages/Home/Hero';
import UseState1 from './pages/UseState1/UseState';
import UseState2 from './pages/UseState2/UseState';
import UseState3 from './pages/UseState3/UseState';
import UseEffect from './pages/UseEffect/UseEffect';
import UseReducer from './pages/UseReducer/UseReducer';

function App() {
  return (
    <>
      {/* <AuthContextProvider> */}
        {/* <Routes /> */}
      {/* </AuthContextProvider> */}
      <Hero />
      <UseState1 />
      <UseState2 />
      <UseState3 />
      <UseEffect />
      <UseReducer />
    </>
  );
}

export default App;
