import { React } from 'react';
import PageTop from './components/PageTop/PageTop';
import TopNavigation from './components/TopNavigation/TopNavigation';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div>
      <TopNavigation />
      <PageTop pageTitle="About Me" />
    </div>
  );
}

export default App;
