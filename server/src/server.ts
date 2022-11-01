import Fastify from "fastify";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  fastify.get('/pools/count', () => {
    return { count: 3 };
  });

  await fastify.listen({ port: 3001 });
}

bootstrap();