import Cookies from 'universal-cookie';
import { Environment, RecordSource, Store } from 'relay-runtime';
import {
  RelayNetworkLayer,
  loggerMiddleware,
  urlMiddleware,
  errorMiddleware,
  perfMiddleware,
  retryMiddleware,
  authMiddleware,
  cacheMiddleware,
  progressMiddleware,
  uploadMiddleware,
} from 'react-relay-network-modern';

const cookies = new Cookies();

const network = new RelayNetworkLayer([
  cacheMiddleware({
    size: 100, // max 100 requests
    ttl: 900000, // 15 minutes
  }),
  urlMiddleware({
    url: () => Promise.resolve(`${process.env.REACT_APP_DEV_API_URL}/graphql`),
  }),
  process.env.NODE_ENV === 'development' ? loggerMiddleware() : null,
  process.env.NODE_ENV === 'development' ? errorMiddleware() : null,
  process.env.NODE_ENV === 'development' ? perfMiddleware() : null,
  retryMiddleware({
    fetchTimeout: 15000,
    retryDelays: (attempt) => Math.pow(2, attempt + 4) * 100, // or simple array [3200, 6400, 12800, 25600, 51200, 102400, 204800, 409600],
    beforeRetry: ({ abort, attempt }) => {
      if (attempt > 3) abort();
    },
    statusCodes: [500, 503, 504],
  }),
  authMiddleware({
    allowEmptyToken: true,
    token: () => cookies.get('Bearer'),
  }),
  progressMiddleware({
    onProgress: (current, total) => {
      console.log('Downloaded: ' + current + ' B, total: ' + total + ' B');
    },
  }),
  uploadMiddleware(),
  (next) => async (req) => {
    req.fetchOpts.body = (req.fetchOpts.body as string).replace(
      'id',
      'operationName'
    );

    return next(req);
  },
]);

export default new Environment({
  network,
  store: new Store(new RecordSource()),
}) as any;
