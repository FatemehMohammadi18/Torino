function MenuIcon({ className = "", onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="currentColor"
      className={className}
      onClick={onClick}
    >
      <path
        d="M22 2L2 2"
        stroke="#10411B"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={className}
      />
      <path
        d="M22 10L2 10"
        stroke="#10411B"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={className}
      />
      <path
        d="M22 18L2 18"
        stroke="#10411B"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={className}
      />
    </svg>
  );
}

export default MenuIcon;
