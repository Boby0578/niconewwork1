import React from 'react';

interface NewMicrophoneIconProps {
  className?: string;
}

const NewMicrophoneIcon: React.FC<NewMicrophoneIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15C14.21 15 16 13.21 16 11V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11C8 13.21 9.79 15 12 15ZM11.5 15V19H12.5V15H11.5ZM9 19V20H15V19H9Z"
      />
    </svg>
  );
};

export default NewMicrophoneIcon;