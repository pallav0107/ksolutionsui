# Use the base Node.js 16 Alpine image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Clear the npm cache
RUN npm cache clean --force

# Upgrade npm to the latest version
RUN npm install -g npm@latest

# Copy the entire local directory to the working directory
COPY . .

# Build the optimized production version of the project
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set the command to run when the container starts
CMD [ "npm", "start" ]
