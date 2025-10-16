import style from "./index.module.css";
const Button = ({ text }: { text: string }) => {
    const letters = text.split("");
    return (
        <div className={style.button_wrapper}>
            <div>
                {letters.map((letter, index) => (
                    <span
                        key={`original-${index}`}
                        className={style.button_text}
                        style={{ ["--index" as string]: index } as React.CSSProperties}
                    >
                        {letter}
                    </span>
                ))}
            </div>
            <div style={{ position: "absolute", top: 0, left: 0 }}>
                {letters.map((letter, index) => (
                    <span
                        key={`clone-${index}`}
                        className={style.button_text}
                        style={{ ["--index" as string]: index } as React.CSSProperties}
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Button;