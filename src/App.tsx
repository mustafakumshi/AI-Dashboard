import Dashboard from './components/Dashboard';
import Footer from './components/footer/Footer';
import Header from './components/Header';
import useAIData from './hooks/useAiData';
import './styles/main.scss';

function App() {

  useAIData();

  return (
    <>
   <Header>AI Dashboard</Header>
   <Dashboard/>
   <Footer></Footer>
   </>
  )
}

export default App
