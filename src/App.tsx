import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';

import ToasterNotify from './components/Toaster';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <ToasterNotify />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
