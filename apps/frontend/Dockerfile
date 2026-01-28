# syntax=docker/dockerfile:1

FROM node:20-alpine AS base
WORKDIR /repo
ENV NEXT_TELEMETRY_DISABLED=1

FROM base AS deps
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/frontend/package.json ./apps/frontend/package.json
RUN pnpm install --frozen-lockfile --filter ./apps/frontend...

FROM base AS builder
RUN corepack enable
COPY --from=deps /repo/node_modules ./node_modules
COPY --from=deps /repo/apps/frontend/node_modules ./apps/frontend/node_modules
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/frontend ./apps/frontend
RUN pnpm --filter frontend build

FROM node:20-alpine AS runner
WORKDIR /repo
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN addgroup -S app && adduser -S app -G app
COPY --from=builder --chown=app:app /repo/apps/frontend/.next/standalone ./
COPY --from=builder --chown=app:app /repo/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=builder --chown=app:app /repo/apps/frontend/public ./apps/frontend/public
USER app
EXPOSE 3000
CMD ["node", "apps/frontend/server.js"]
