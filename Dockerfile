FROM alpine:3.14 as build
#alpine smaller version of ubuntu faster build times. 
RUN apk add --no-cache nodejs npm
# creates directory for app
WORKDIR /script
# copies the script into the container
COPY script.js . 

# Expose the port your app will run on
EXPOSE 8000

# Start the Node.js script
CMD ["node", "script.js"]