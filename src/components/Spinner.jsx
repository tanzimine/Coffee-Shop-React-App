import React from 'react';

const Spinner = ({ 
    size = "md", 
    variant = "dots", 
    color = "primary",
    text = "Loading...",
    showText = true 
}) => {
    const sizeClasses = {
        xs: "w-4 h-4",
        sm: "w-6 h-6", 
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    };

    const colorClasses = {
        primary: "text-primary",
        secondary: "text-secondary", 
        accent: "text-accent",
        neutral: "text-neutral",
        success: "text-success",
        warning: "text-warning",
        error: "text-error"
    };

    const renderSpinner = () => {
        switch (variant) {
            case "dots":
                return (
                    <div className={`loading loading-dots ${colorClasses[color]} ${sizeClasses[size]}`}></div>
                );
            case "ring":
                return (
                    <div className={`loading loading-ring ${colorClasses[color]} ${sizeClasses[size]}`}></div>
                );
            case "ball":
                return (
                    <div className={`loading loading-ball ${colorClasses[color]} ${sizeClasses[size]}`}></div>
                );
            case "bars":
                return (
                    <div className={`loading loading-bars ${colorClasses[color]} ${sizeClasses[size]}`}></div>
                );
            case "infinity":
                return (
                    <div className={`loading loading-infinity ${colorClasses[color]} ${sizeClasses[size]}`}></div>
                );
            case "spinner":
            default:
                return (
                    <div className={`loading loading-spinner ${colorClasses[color]} ${sizeClasses[size]}`}></div>
                );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-3">
            {renderSpinner()}
            {showText && text && (
                <p className="text-sm text-gray-600 font-medium">{text}</p>
            )}
        </div>
    );
};

// Coffee-themed spinner variants
export const CoffeeSpinner = ({ size = "md", showText = true }) => {
    const sizeClasses = {
        xs: "w-4 h-4",
        sm: "w-6 h-6", 
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    };
    
    return (
        <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative">
                <div className={`loading loading-spinner text-amber-600 ${sizeClasses[size]}`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-amber-800 rounded-full animate-pulse"></div>
                </div>
            </div>
            {showText && (
                <p className="text-sm text-amber-700 font-medium">Brewing your coffee...</p>
            )}
        </div>
    );
};

// Page loading spinner
export const PageSpinner = () => (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card bg-base-100 shadow-xl p-8">
            <div className="flex flex-col items-center gap-4">
                <div className="loading loading-spinner loading-lg text-primary"></div>
                <p className="text-lg font-semibold text-gray-700">Loading...</p>
            </div>
        </div>
    </div>
);

// Button spinner for loading states
export const ButtonSpinner = ({ size = "sm" }) => (
    <div className={`loading loading-spinner loading-${size} text-current`}></div>
);

// Inline spinner for small loading states
export const InlineSpinner = ({ color = "primary" }) => {
    const colorClasses = {
        primary: "text-primary",
        secondary: "text-secondary", 
        accent: "text-accent",
        neutral: "text-neutral",
        success: "text-success",
        warning: "text-warning",
        error: "text-error"
    };
    
    return (
        <div className={`loading loading-spinner loading-xs ${colorClasses[color]}`}></div>
    );
};

export default Spinner;