# Use an official Node.js runtime as the base image
FROM node:14.21.3-alpine

# Set the working directory inside the container
WORKDIR /app

# Install an older version of npm globally  -g npm@9.6.7
RUN npm install

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Expose a port if your React app requires it (e.g., for testing or development purposes)
EXPOSE 3000

# Set the command to run when the container starts
CMD [ "npm", "start" ]

