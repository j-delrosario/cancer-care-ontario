const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../api');
const config = require('../config');

module.exports = ({ app }) => {
  /**
   * Health Check endpoints
   */
  app.get('/', (req, res) => {
    res.status(200).end();
  });
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  // maybe also have to parse xml?
  app.use(bodyParser.json());

  // Load API routes
  app.use(config.api.prefix, routes());

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  /// error handlers
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};