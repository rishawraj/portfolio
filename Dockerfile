FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --frozen-lockfile

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

# copy only necessary files from the builder stage

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json 
COPY --from=builder /app/next.config.ts ./next.config.ts

# RUN npm pkg delete scripts.prepare 

RUN npm ci --omit=dev --frozen-lockfile

# set env variables for production
ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]