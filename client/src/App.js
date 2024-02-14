
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from './components/Messanger';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientId='914193436239-b7gr8qkdkib9m0pi6ljuj6vncdhsugeq.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
