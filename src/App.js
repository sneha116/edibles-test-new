import { Routes, Route } from 'react-router-dom';


// import UserProfile from './Components/Profile/UserProfile';
import AuthPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    
     
      <Routes>
        <Route path='/' exact element={ <AuthPage />} />
         
        
        <Route path='/auth' element={ <AuthPage />} />
         
        
        <Route path='home' element={<HomePage />} />
          
         
        </Routes>
     
   
  );
}

export default App;
