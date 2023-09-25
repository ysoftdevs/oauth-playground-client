const baseUrl = "https://www.sso.oauth-playground.online/auth";

function getClientId() {
    if (window.location.hostname === "localhost") {
        return "oauth-playground-localhost";
    }

    return "oauth-playground";
}