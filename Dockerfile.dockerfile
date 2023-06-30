# Use the base Node.js 16 Alpine image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install -g npm@9.7.2

# Copy the entire local directory to the working directory
COPY . .

# Build the optimized production version of the project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set the command to run when the container starts
CMD [ "npm", "start" ]
