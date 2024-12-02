import React, { useState } from 'react';

interface TruncateTextProps {
    text: string;
    maxLength: number;
}

/**
 * TruncateText component truncates the given text to a specified maximum length and provides an option to expand or collapse the text.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be truncated.
 * @param {number} props.maxLength - The maximum length of the truncated text.
 * @returns {JSX.Element} The TruncateText component.
 */
export const TruncateText: React.FC<TruncateTextProps> = ({ text, maxLength }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => setIsExpanded((prev) => !prev);

    const displayText = isExpanded ? text : `${text.slice(0, maxLength)}${text.length > maxLength ? "..." : ""}`;

    return (
        <div>
            <p className="text-[#3b3b3b] text-lg pb-2">
                {displayText}
            </p>
            {text.length > maxLength && (
                <a
                    onClick={toggleText}
                    className="text-[#3b3b3b] text-sm"
                >
                    {isExpanded ? "Show Less" : "Show More"}
                </a>
            )}

        </div>
    );
};
