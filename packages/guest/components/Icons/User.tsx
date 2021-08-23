const User = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 13a7 7 0 00-7 7v2a1 1 0 11-2 0v-2a9 9 0 1118 0v2a1 1 0 11-2 0v-2a7 7 0 00-7-7z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 11a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12z"
      fill="currentColor"
    />
  </svg>
);

export default User;
