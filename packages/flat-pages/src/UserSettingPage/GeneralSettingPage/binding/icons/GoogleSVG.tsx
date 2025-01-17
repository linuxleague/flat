import React from "react";

export function GoogleSVG({ color }: { color: string | undefined }): React.ReactElement {
    const path = [
        {
            d: "M7.34525 12C7.34525 11.492 7.43192 11.0046 7.58525 10.548L4.89325 8.53465C4.35238 9.60963 4.07151 10.7966 4.07325 12C4.07325 13.2453 4.36792 14.42 4.89192 15.4626L7.58258 13.446C7.4257 12.98 7.34554 12.4917 7.34525 12Z",
            color: "#FBBC05",
        },
        {
            d: "M12.0732 7.37798C13.1999 7.37798 14.2179 7.76865 15.0179 8.40865L17.3452 6.13331C15.9272 4.92465 14.1092 4.17798 12.0732 4.17798C8.91192 4.17798 6.19458 5.94798 4.89325 8.53465L7.58658 10.548C8.20658 8.70398 9.97458 7.37798 12.0732 7.37798Z",
            color: "#EA4335",
        },
        {
            d: "M12.0733 16.622C9.97392 16.622 8.20592 15.296 7.58525 13.452L4.89325 15.4653C6.19392 18.052 8.91125 19.822 12.0733 19.822C14.0239 19.822 15.8866 19.144 17.2853 17.8726L14.7293 15.938C14.0086 16.3826 13.1006 16.622 12.0726 16.622",
            color: "#34A853",
        },
        {
            d: "M19.7093 12C19.7093 11.538 19.6359 11.04 19.5273 10.578H12.0726V13.6H16.3633C16.1493 14.6306 15.5653 15.4226 14.7299 15.938L17.2853 17.8726C18.7539 16.538 19.7093 14.55 19.7093 12Z",
            color: "#4285F4",
        },
    ];

    if (color) {
        path.forEach(item => {
            item.color = color;
        });
    }

    return (
        <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                className="circle"
                cx="12"
                cy="12"
                fill="#fff"
                r="11.75"
                stroke="#b7bbc1"
                strokeWidth="0.5"
            />
            {path.map((item, index) => (
                <path key={index} d={item.d} fill={item.color} />
            ))}
        </svg>
    );
}
