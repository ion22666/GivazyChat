const Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
            {/*  */}
            {props.children}
        </svg>
    );
};

export default Icon;
