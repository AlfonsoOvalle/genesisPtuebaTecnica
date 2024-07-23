//Pages
import Cpanel from './pages/Cpanel'

const App = (props) => {
    return (
       <Cpanel datosUser={{ displayName: "Denis Morales", email: "denis@chn.com", emailVerified: true, phoneNumber: "54833279", photoURL: null }}/> 
   );
}

export default App;