import { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import CircularProgress from '@mui/material/CircularProgress';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import '../index.css';
import { ErrorBoundary } from '../components';
import RelayEnvironment from '../relay/RelayEnvironment';
import { Login } from '../routes/public';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);

const Root: React.FC = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Suspense
      fallback={
        <CircularProgress size='100px' className='loader' color='primary' />
      }
    >
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Suspense>
  </RelayEnvironmentProvider>
);

export default Root;
