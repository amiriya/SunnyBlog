import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

const server = app.listen(process.env.PORT || 36000, process.env.IP || '127.0.0.1', () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`SunnyBlog started, listening at http://${host}:${port}`);
});
