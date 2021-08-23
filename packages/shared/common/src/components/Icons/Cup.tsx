const Cup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5H8a1 1 0 00-1 1v4a5 5 0 0010 0V6a1 1 0 00-1-1zM8 3a3 3 0 00-3 3v4a7 7 0 1014 0V6a3 3 0 00-3-3H8z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 8a3 3 0 013-3h3v8H5a4 4 0 01-4-4V8zm3-1h1v4a2 2 0 01-2-2V8a1 1 0 011-1zM23 8a3 3 0 00-3-3h-3v8h2a4 4 0 004-4V8zm-3-1h-1v4a2 2 0 002-2V8a1 1 0 00-1-1z"
      fill="currentColor"
    />
    <path
      d="M12 15a1 1 0 00-1 1v3H9a1 1 0 100 2h6a1 1 0 100-2h-2v-3a1 1 0 00-1-1z"
      fill="currentColor"
    />
  </svg>
);

export default Cup;
