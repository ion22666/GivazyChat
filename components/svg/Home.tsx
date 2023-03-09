const HomeIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
            <polygon points="192 0 0 153.6 0 384 149.333 384 149.333 256 234.667 256 234.667 384 384 384 384 153.6" transform="translate(64 64)" />
            {props.children}
        </svg>
    );
};

export default HomeIcon;
