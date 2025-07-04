FROM node:22-alpine AS builder

WORKDIR /app

ARG NEXT_PUBLIC_WEATHER_API_KEY
ARG NEXT_PUBLIC_WEATHER_API_URL

ENV NEXT_PUBLIC_WEATHER_API_KEY=$NEXT_PUBLIC_WEATHER_API_KEY
ENV NEXT_PUBLIC_WEATHER_API_URL=$NEXT_PUBLIC_WEATHER_API_URL

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
