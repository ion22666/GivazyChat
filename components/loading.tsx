import React from "react";

export const transition_duration = 100;
export const minimum_time_loading = 1500;

type Props = {
    is_loading: boolean;
};
export const Loading: React.FunctionComponent<Props> = ({ is_loading }: Props) => {
    // exista o diferenta intre is_loading si is_visible:
    // is_loading se termina cand next.js a rendat pagina,
    // is_visible trebuie sa se termine dupa ce loading screenul isi termina tranzitia

    let [is_visible, set_is_visible] = React.useState(false);
    let [opacity, set_opacity] = React.useState("0");

    const divRef = React.useRef(null);

    React.useEffect(() => {
        let timeout_id = setTimeout(() => set_is_visible(is_loading), is_loading ? 0 : transition_duration);
        return () => clearTimeout(timeout_id);
    }, [is_loading]);

    // este nevoie sa punem opacitatea = 1 doar dupa ce div-ul este vizibil, altfel animatia nu se va activa
    React.useEffect(() => {
        // folosim IntersectionObserver API pentru a adauga un "eventListener" pentru momentul cand div-ul devine vizibil for sure
        const observer = new IntersectionObserver(entries =>
            entries.forEach(entry => {
                observer.unobserve(entry.target);
                if (entry.isIntersecting) set_opacity(is_visible && is_loading ? "1" : "0");
            })
        );
        observer.observe(divRef.current);
        return () => observer.disconnect();
    }, [is_visible, is_loading]);

    return (
        <div
            ref={divRef}
            style={{ opacity: opacity, display: is_visible ? "flex" : "none", transitionDuration: transition_duration + "ms" }}
            className="flex justify-center items-center w-full h-full fixed top-0 left-0 loading-screen ease-linear backdrop-blur-md bg-black bg-opacity-10"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-fill absolute h-64 md:h-64 lg:h-64 w-auto text-Verde" viewBox="0 0 16 16 ">
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
            </svg>

            <div className="flex justify-center items-center top-0 left-0 gap-6">
                <div className="bg-white h-5 aspect-square rounded-full animate-loading-dot" style={{ animationDelay: "0ms" }}></div>
                <div className="bg-white h-5 aspect-square rounded-full animate-loading-dot" style={{ animationDelay: "100ms" }}></div>
                <div className="bg-white w-5 aspect-square rounded-full animate-loading-dot" style={{ animationDelay: "200ms" }}></div>
            </div>
        </div>
    );
};
