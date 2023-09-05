FROM nginx
COPY /dist/base-corporate-admin /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d
COPY replace_api_url.sh /
RUN chmod +x /replace_api_url.sh
WORKDIR /
CMD ["sh", "replace_api_url.sh"]
