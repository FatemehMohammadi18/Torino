function ArrowLeftIcon({ className = "", onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      onClick={onClick}
    >
      <path
        d="M9.57 5.93L3.5 12L9.57 18.07"
        stroke="#171717"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className={className}
      />
      <path
        d="M20.4999 12H3.66992"
        stroke="#171717"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
}

export default ArrowLeftIcon;
