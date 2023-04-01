type Props = {
    value: number;
};

function NumberNotification(props: Props) {
    return (
        <div className="absolute top-0 right-0 flex aspect-square min-w-[50%] translate-x-1/4 items-center justify-center rounded-full bg-Crimson text-white shadow-sm shadow-black">
            {props.value}
        </div>
    );
}

export default NumberNotification;
