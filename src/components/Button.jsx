

const Button = ({className, href, onClick, children, px}) => {

    const classes = `button  border border-2 animate-shimmer border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] rounded-full relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${className || ""}`;

    const spanClasses = "relative z-10 " ;

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClasses}>{children}</span>
        </button>
    )


    const renderLink = () => (
        <a href={href} className={classes}>
             <span className={spanClasses}>{children}</span>
        </a>
    )

    return href //if href is specified, it returns the link , else the button
    ? renderLink()
    : renderButton();
};

export default Button;


