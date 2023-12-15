# Use the official Node.js 14 image with Alpine Linux
FROM node

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your application will run
EXPOSE 3001

# Define the command to run your application
CMD ["npm", "start"]