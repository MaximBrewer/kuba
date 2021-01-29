import React from "react";

export const ArrowDown = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 16 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7.2929 71.7071C7.68342 72.0976 8.31659 72.0976 8.70711 71.7071L15.0711 65.3431C15.4616 64.9526 15.4616 64.3195 15.0711 63.9289C14.6805 63.5384 14.0474 63.5384 13.6569 63.9289L8 69.5858L2.34315 63.9289C1.95262 63.5384 1.31946 63.5384 0.928935 63.9289C0.538411 64.3195 0.538411 64.9526 0.928935 65.3431L7.2929 71.7071ZM7 4.37114e-08L7 71L9 71L9 -4.37114e-08L7 4.37114e-08Z"
                fill="white"
            />
        </svg>
    );
};

export const ArrowRight = ({ className }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 24 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21.8334 5L18.1635 2L18.1635 5L18.1635 8L21.8334 5Z"
                fill="#1A1A1F"
            />
            <path
                d="M0.833373 5L21.8334 5M21.8334 5L18.1635 2L18.1635 8L21.8334 5Z"
                stroke="#1A1A1F"
                strokeWidth="1.5"
                strokeLinecap="square"
            />
        </svg>
    );
};
