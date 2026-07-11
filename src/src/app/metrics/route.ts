import { register, collectDefaultMetrics } from 'prom-client';

// Prevent multiple initializations in development/HMR
if (typeof globalThis !== 'undefined' && !((globalThis as any)._prometheusMetricsInitialized)) {
  collectDefaultMetrics({ register });
  (globalThis as any)._prometheusMetricsInitialized = true;
}

export async function GET() {
  const metrics = await register.metrics();
  return new Response(metrics, {
    headers: {
      'Content-Type': register.contentType,
    },
  });
}
