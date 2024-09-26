import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../index.css';
import { ErrorBoundary } from '../components';
import RelayEnvironment from '../relay/RelayEnvironment';
import { Login } from '../routes/public';
import { App, Items } from '../routes/private';

const Root: React.FC = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense
      fallback={
        <CircularProgress size='100px' className='loader' color='primary' />
      }
    >
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/app/*' element={<App />}>
              <Route path='items' element={<Items />} />
              <Route path='clients' />
            </Route>
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </Suspense>
  </RelayEnvironmentProvider>
);

export default Root;
