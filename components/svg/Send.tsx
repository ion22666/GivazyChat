export const SendIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <title className="stroke-2">Send</title>
            <path
                d="M18.5,13.66,5.44,19.85A1,1,0,0,1,4.1,18.54l2.72-6.13a1.06,1.06,0,0,0,0-.82L4.71,6.84l13,6.16A1.93,1.93,0,0,1,18.5,13.66Z"
                className="fill-Verde stroke-2"
            ></path>
            <path
                d="M20.09,12.9l-1.59.76L5.44,19.85A1,1,0,0,1,4.1,18.54l2.72-6.13a1.06,1.06,0,0,0,0-.82L4.71,6.84,4.1,5.46A1,1,0,0,1,5.44,4.15l14.65,7A1,1,0,0,1,20.09,12.9ZM7,12h4"
                className=" stroke-black stroke-2"
                style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
            ></path>
            {props.children}
        </svg>
    );
};

export default SendIcon;
