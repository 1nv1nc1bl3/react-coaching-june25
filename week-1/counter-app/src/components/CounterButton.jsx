function CounterButton({
    label,
    onBtnClick,
    color,
    singleButtonClass,
    isDisabled,
}) {
    return (
        <button
            className={singleButtonClass}
            onClick={onBtnClick}
            style={color}
            disabled={isDisabled}
        >
            {label}
        </button>
    );
}

export default CounterButton;
