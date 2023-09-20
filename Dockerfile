# Yser oficial nodejs runtime as a parent image
FROM node:18-alpine AS builder
# set app working directory
WORKDIR /app
#copy package.json and package-lock.json file to the container
COPY package*.json /app
COPY . /app
RUN npm install
RUN npm run build
RUN sleep 10
# remove dev dependencies
# RUN npm prune --production

# using lightweight alpine image for final image
FROM node:18-alpine
# set app working directory /app
WORKDIR /app
# copy the app from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
# start the application
CMD ["npm", "start"]
EXPOSE 3000