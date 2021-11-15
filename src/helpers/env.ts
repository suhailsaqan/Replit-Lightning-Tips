export const env = {
  max: Number(process.env.MAX) || 100000000,
  min: Number(process.env.MIN) || 0,
  metadata: process.env.META || "Replit Lightning Invoice",
  name: process.env.NAME || "Replit Lightning",
};

export const metadata = JSON.stringify([["text/plain", env.metadata]]);
