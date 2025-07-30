// import './App.css';
// import Garage from './pages/Garage';
// // import Registration from './Registration';
// import Login from './pages/Login';
// function App() {
//   return (
//     <div className="App">
//       {/* <Registration/> */}
//       {/* <h1>Hello World</h1> */}
//       {/* <Login /> */}
//       <Garage/>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Garage from './pages/Garage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TutorialsListComponent from './pages/tutorials-list.component';
import AddTutorial from './pages/AddTutorial';
import Tutorial from './Tutorial';
// import NoPage from './pages/NoPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route index element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path="/garage" element={<Garage/>}/>
        <Route path="/tutorials" element={<TutorialsListComponent/>}/>
        <Route path="/addcomponent" element={<AddTutorial/>}/>
        <Route path="/tutorials/:id" element={<Tutorial/>} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;