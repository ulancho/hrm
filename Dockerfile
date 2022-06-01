# Set the base image to node:12-alpine
FROM node:12-alpine AS build

# ENV HTTP_PROXY http://digisinov:786Dinmukhamet%21%5E%21%21@megaproxy.megacom.local:3128
# ENV HTTPS_PROXY http://digisinov:786Dinmukhamet%21%5E%21%21@megaproxy.megacom.local:3128

ARG HTTP_PROXY
ARG HTTPS_PROXY

# Specify where our app will live in the container
WORKDIR /app

# Copy the React App to the container
COPY . /app/

# Prepare the container for building React
RUN npm install
# We want the production version
RUN npm run build

FROM nginx:1.20.0
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Fire up nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]