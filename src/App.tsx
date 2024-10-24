
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Product from './components/product'
import Main from './components/unique/Main'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      {/* <Product /> */}
      <Main />
    </QueryClientProvider>
  )
}

export default App
