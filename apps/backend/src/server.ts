import Fastify from 'fastify';
import healthRoutes from './routes/health.js';

const fastify = Fastify({
  logger: true
});

// Register routes
fastify.register(healthRoutes);

// Run the server!
const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '3000', 10);
    const host = process.env.HOST || '0.0.0.0';
    await fastify.listen({ port, host });
    console.log(`Server listening on http://${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
