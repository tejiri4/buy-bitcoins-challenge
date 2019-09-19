import express from 'express';
import logger from 'morgan';
import consola from 'consola';
import cors from 'cors';
import server from './config/graphql';
import messages from './utils/messages';

const PORT = process.env.PORT || 5000;

const app = express();

server.applyMiddleware({ app });

app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.status(200).send({
    data: {
      message: messages.welcome,
    },
  });
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404).send({
    data: {
      message: messages.notFound,
    },
  });
});

app.listen({ port: PORT }, () => consola.info(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));

export default app;
