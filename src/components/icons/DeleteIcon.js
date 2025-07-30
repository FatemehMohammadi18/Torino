function DeleteIcon({ className = "", onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="currentColor"
      className={className}
      onClick={onClick} 
    >
      <path
        d="M12.7573 12.7574L21.2426 21.2426"
        stroke="#171717"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <path
        d="M12.7574 21.2426L21.2427 12.7574"
        stroke="#171717"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
}

export default DeleteIcon;
