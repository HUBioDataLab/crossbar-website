FROM joseluisq/static-web-server:2-alpine
LABEL org.opencontainers.image.description DESCRIPTION
COPY ./src ./public
