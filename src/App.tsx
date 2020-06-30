import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/signIn';
// import SignUp from './pages/signUp';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
