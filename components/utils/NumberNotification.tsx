type Props = {
    value: number;
};

function NumberNotification(props: Props) {
    return (
        props.value > 0 && (
            <div className="absolute top-0 right-0 flex aspect-square min-h-[1.2rem] min-w-[1.2rem] translate-x-1/2 items-center justify-center rounded-full bg-Crimson text-base text-white shadow-sm shadow-black">
                {props.value}
            </div>
        )
    );
}

export default NumberNotification;
