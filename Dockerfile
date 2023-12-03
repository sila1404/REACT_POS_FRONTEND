# Base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production image
FROM nginx:1.23.4 AS production

# Copy build files to nginx
COPY --from=base /usr/src/app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]