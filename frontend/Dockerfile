# Use Node.js LTS image for building
FROM node:16 AS builder

# Set working directory
WORKDIR /app

# Copy frontend files
COPY . .

# Install dependencies and build the React app
RUN npm install && npm run build

# Use Nginx to serve the static files
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Expose the frontend port
EXPOSE 80
