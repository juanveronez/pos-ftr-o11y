import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";
import { uploadImageRoute } from "./routes/upload-image";
import { fastifyMultipart } from "@fastify/multipart";
import { healthCheckRoute } from "./routes/health-check";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
});

server.register(fastifyMultipart);
server.register(healthCheckRoute);
server.register(uploadImageRoute);

server.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
