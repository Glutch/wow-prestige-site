import type { NextConfig } from "next";

// The model viewer's same-origin asset proxy lives in
// src/app/modelviewer/[...path]/route.ts — a rewrite can't retry zamimg's
// transient errors or strip the cacheable headers on its error responses.
const nextConfig: NextConfig = {};

export default nextConfig;
