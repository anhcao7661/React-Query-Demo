import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import './App.css';
import { Products } from './components/Products';
import { RQProducts } from './components/RQProducts';
import { HomePage } from './components/HomePage';
import { RQProduct } from './components/RQProduct';
import { ParallelQueries } from './components/ParallelQueries';
import { DynamicParallel } from './components/DynamicParallel'
import { PaginatedQueries } from './components/PaginatedQueries'
import { InfiniteQueries } from './components/InfiniteQueries'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/rq-products'>RQ Products</Link>
            </li>
            <li>
              <Link to='/rq-paginated'>RQ Paginated</Link>
            </li>
            <li>
              <Link to='/rq-infinite'>RQ Infinite</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/products' component={Products} />
          <Route exact path='/rq-products' component={RQProducts} />
          <Route path='/rq-products/:productId' component={RQProduct} />
          <Route exact path='/rq-parallel' component={ParallelQueries} />
          <Route path='/rq-dynamic-parallel'>
            <DynamicParallel productIds={[1, 3]} />
          </Route>
          <Route path='/rq-paginated'>
            <PaginatedQueries />
          </Route>
          <Route path='/rq-infinite' component={InfiniteQueries} />
        </Switch>
      </Router>
      <ReactQueryDevtools initialIsOpem={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
