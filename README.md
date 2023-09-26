# ysoftdevs/oauth-playground-client

[![OAuth playground client deploy](https://github.com/ysoftdevs/oauth-playground-client/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/ysoftdevs/oauth-playground-client/actions/workflows/deploy.yml)

Welcome to OAuth Playground Client source repo. This playground serves as an interactive platform designed to familiarize developers and students with the intricacies of OAuth authentication processes. Beyond just theoretical knowledge, this playground provides practical insights into the OAuth token exchange, callback handling, and potential pitfalls or challenges one might face during real-world integrations. The ultimate aim is to bolster understanding and confidence in implementing OAuth, ensuring secure and efficient user authentication and authorization in modern web applications.

> You can find the server implemenetation on [ysoftdevs/oauth-playground-server](https://github.com/ysoftdevs/oauth-playground-server)

## How to run

- Client needs to be running on web server (e.g. `Apache`, `Nginx`, etc.) to properly handle OAuth callbacks.
- To properly handle navigation on the site, you need to have following `location` config

```
location / {
    try_files $uri $uri/ $uri.html =404;
}
```

- If you will be running against our [sso.oauth-playground.online](https://www.sso.oauth-playground.online/) make sure that client is running on port `5555` otherwise your requests will be rejected based on `redirect_uri` mismatch.
