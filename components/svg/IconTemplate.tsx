const Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props}>
            {/*  */}
            {props.children}
            {/*  */}
        </svg>
    );
};

export default Icon;
