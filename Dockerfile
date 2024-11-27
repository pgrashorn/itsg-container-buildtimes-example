# Build and Install Dependencies
FROM node:20-alpine
WORKDIR /app
COPY package.json yarn.lock ./
# Install dependencies and cache mount
RUN --mount=type=cache,target=/root/.cache/yarn \
    --mount=type=cache,target=/app/node_modules \
    yarn install
# Copy the rest of the project files
COPY . .

EXPOSE 3000
# Set the default command to run the application
CMD ["yarn", "start"]
