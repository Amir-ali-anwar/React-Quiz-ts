import './App.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'normalize.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
