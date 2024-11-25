import React from 'react';
import './assets/styles/_global.scss';
import Chatbot from './components/Chatbot'

interface AppProps {
  sidebarVisible?: boolean;
  fontFamily?: string;
  
};

const App: React.FC<AppProps> = ({ sidebarVisible = false, fontFamily='Inter'}) => {

  return(
  <>
   <Chatbot />
   </>
)
};

export default App;
