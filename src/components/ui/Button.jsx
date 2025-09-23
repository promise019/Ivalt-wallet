export default function Button({className, onClick, children, disabled}){
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}