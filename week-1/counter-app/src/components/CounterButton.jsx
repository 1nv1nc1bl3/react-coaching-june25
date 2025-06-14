function CounterButton({ label, onBtnClick, color, singleButtonClass }) {
    return (
        <button
            className={singleButtonClass}
            onClick={onBtnClick}
            style={color}
        >
            {label}
        </button>
    );
}

export default CounterButton;
