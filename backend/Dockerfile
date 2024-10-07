# Use Node.js LTS image
FROM node:16

# Set working directory
WORKDIR /app

# Copy backend files
COPY . .

# Install dependencies
RUN npm install

# Expose the backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
