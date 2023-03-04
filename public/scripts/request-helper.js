(() => {
    // cream o clona a functiei fetch() care automat adauga tokenul-ul in header
    window.request = function (...arg) {
        if (!arg[1]) arg.push({});
        if (!arg[1].headers) arg[1].headers = {};
        arg[1].headers["Authorization"] = "Bearer " + (window.token || localStorage.getItem("token") || "");
        arg[1].redirect = "manual";
        return fetch(...arg);
    };
    // verificam daca in localstorage exista un toke doar atunci cand se acceseaza index/home pageul
    if (!(window.location.pathname === "/")) return;

    window.token = localStorage.getItem("token");

    // daca nu exista nici un token, dam redirect la pagina de login
    if (!window.token) window.location = "/login";

    // testam tokenul sa vedem ca e bun, daca nu e bun dam redirect la login ca sa fie bine
    fetch("/api/test-token").then(r => {
        if (!r.ok) window.location = "/login";
    });
})();
