import React from "react";

type ButtonProps = {
    name: string;
    size?: "sm" | "md" | "lg";
    isActive?: boolean;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
    name,
    size = "md",
    isActive = false,
    onClick,
    type = "button",
}) => {
    const sizeClasses: Record<"sm" | "md" | "lg", string> = {
        sm: "min-w-[100px] max-w-[120px] min-h-[30px] px-3 text-xs",
        md: "min-w-[120px] max-w-[140px] min-h-[40px] px-4 text-sm",
        lg: "min-w-[140px] max-w-[180px] min-h-[50px] px-5 text-base",
    };


    return (
        <button
            type={type}
            className={`relative flex items-center justify-center w-full whitespace-nowrap  transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 
            text-white ${sizeClasses[size]}`}
            onClick={onClick}
        >
            <div className="relative flex ">
                <svg 
                    width="50" height="50" viewBox="0 0 5 100"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-[45px] w-[45px] transition-all duration-300 ease-in-out ${
                        isActive ? "drop-shadow-[0_0_12px_#6A0DAD]" : "hover:drop-shadow-[0_0_12px_#B026FF]"
                    }`} 
                >
                    <path 
                        d="M 50 0 L 50 100 L 30 100 L 30 90 L 40 90 L 40 70 L 30 60 L 30 60 L 30 0 L 50 0" 
                        fill={isActive ? "#6A0DAD" : "#F8D6FF"}
                        fillOpacity="0.1"
                        stroke={isActive ? "#6A0DAD" : "#B026FF"}
                        strokeWidth="5"
                    />
                </svg>

                <div className="relative ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 160 62"
                        fill="none"
                        className={`h-[50px] fulltransition-all duration-300 ease-in-out  ${
                            isActive ? "drop-shadow-[0_0_12px_#6A0DAD]" : "hover:drop-shadow-[0_0_12px_#B026FF]"
                        }`}
                    >
                        <path
                            d="M54.6556 6.62199L55.0376 6.88201H55.4997H150V47.553L138.973 54H9.93774V3H47.1312L54.6556 6.62199Z"
                            fill={isActive ? "#6A0DAD" : "#F8D6FF"}
                            fillOpacity="0.1"
                            stroke={isActive ? "#6A0DAD" : "#B026FF"}
                            strokeWidth="3"
                        />
                    </svg>

                    <span
                        className={`absolute inset-0 flex items-center justify-center font-normal transition-all duration-300 ease-in-out text-ellipsis overflow-hidden whitespace-nowrap 
                        ${isActive ? "text-[#ca86f7] drop-shadow-[0_0_8px_#6A0DAD]" : "hover:text-[#c685ec] hover:drop-shadow-[0_0_8px_#B026FF] drop-shadow-[0_0_5px_#9000FF]"}
                        px-4 text-center`}
                    >
                        {name}
                    </span>
                </div>
            </div>
        </button>
    );
};

export default Button;