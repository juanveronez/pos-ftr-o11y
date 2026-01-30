import z from "zod";

const envSchema = z.object({
  CLOUDFLARE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
  CLOUDFLARE_BUCKET: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_PUBLIC_URL: z.string().url(),

  OTEL_EXPORTER_OTLP_PROTOCOL: z.string(),
  OTEL_EXPORTER_OTLP_ENDPOINT: z.string(),
  OTEL_EXPORTER_OTLP_HEADERS: z.string(),
  OTEL_TRACES_EXPORTER: z.string(),
  OTEL_METRICS_EXPORTER: z.string(),
  OTEL_LOGS_EXPORTER: z.string(),
  NODE_OPTIONS: z.string(),
  OTEL_RESOURCE_ATTRIBUTES: z.string(),
  OTEL_NODE_RESOURCE_DETECTORS: z.string(),
});

export const env = envSchema.parse(process.env);
