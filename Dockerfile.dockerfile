# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the NODE_OPTIONS environment variable with an increased memory limit
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Set the max number of sockets to 10000
RUN echo "fs.inotify.max_user_watches=10000" >> /etc/sysctl.conf

# Increase the limit of open file descriptors
RUN ulimit -n 65536

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]
