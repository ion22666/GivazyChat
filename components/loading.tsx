import React from "react";
import ChatBubbleIcon from "./svg/ChatBubble";

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

    const divRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (is_loading) {
            set_is_visible(true);
        } else {
            divRef.current.ontransitionend = () => set_is_visible(false);
        }
        return () => (divRef.current.ontransitionend = null);
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
            style={{ zIndex: "999999", opacity: opacity, display: is_visible ? "flex" : "none", transitionDuration: transition_duration + "ms" }}
            className="flex justify-center items-center w-full h-full fixed top-0 left-0 loading-screen ease-linear backdrop-blur-md bg-black bg-opacity-10"
        >
            <ChatBubbleIcon className="bi bi-chat-fill absolute h-64 md:h-64 lg:h-64 w-auto text-Verde" />

            <div className="flex justify-center items-center top-0 left-0 gap-6">
                <div className="bg-white h-5 aspect-square rounded-full animate-loading-dot" style={{ animationDelay: "0ms" }}></div>
                <div className="bg-white h-5 aspect-square rounded-full animate-loading-dot" style={{ animationDelay: "100ms" }}></div>
                <div className="bg-white w-5 aspect-square rounded-full animate-loading-dot" style={{ animationDelay: "200ms" }}></div>
            </div>
        </div>
    );
};
