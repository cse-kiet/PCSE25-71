FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Install nodemon globally if used
RUN npm install -g nodemon

EXPOSE 5000

# Run dev script instead of start
CMD ["npm", "run", "dev"]
