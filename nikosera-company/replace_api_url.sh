#!/usr/bin/env sh

find '/usr/share/nginx/html' -name 'main*.js' -exec sed -i -e 's,API_ENDPOINT,'"$API_ENDPOINT"',g' {} \;

nginx -g "daemon off;"
