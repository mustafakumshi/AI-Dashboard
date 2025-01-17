import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Redux Provider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import  store  from './store/index.ts'; // Import the Redux store
import './styles/main.scss'; // Import global styles

// Create a QueryClient instance for React Query
const queryClient = new QueryClient();

// Create the root element
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  {/* Wrap app with Redux Provider */}
      <QueryClientProvider client={queryClient}> {/* Wrap app with React Query Provider */}
        <App />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);

