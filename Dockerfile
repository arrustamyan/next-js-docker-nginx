# Stage 1: Build the Next.js app
FROM node:18.19-alpine AS build

WORKDIR /app

# Adding the package.json and package-lock.json to the container separately to make sure this layer is invalidated only when these files change
COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the nginx configuration folder
COPY ./nginx /etc/nginx/conf.d

# Copy the build output from stage 1 to default nginx public folder
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
