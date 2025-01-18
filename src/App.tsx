import Footer from './components/Footer';
import Header from './components/Header';
import useAIData from './hooks/useAiData';
import './styles/main.scss';

function App() {

  useAIData();

  return (
    <>
   <Header>AI Dashboard</Header>
   <Footer></Footer>
   </>
  )
}

export default App
