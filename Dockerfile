# Stage 1: Build the Angular app
FROM node:20 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install -g @angular/cli@17

# Install project dependencies
RUN npm ci --legacy-peer-deps

# Copy the entire Angular project into the container
COPY . .

# Build the Angular app for production
RUN ng build --output-path=dist/browser

# Stage 2: Serve the app using NGINX
FROM nginx:1.23

# Copy built Angular app from the first stage
COPY --from=build /app/dist/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]