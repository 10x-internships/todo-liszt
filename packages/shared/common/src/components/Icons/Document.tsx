const Document = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M3 5a4 4 0 014-4h8.343a4 4 0 012.829 1.172l1.656 1.656A4 4 0 0121 6.657V19a4 4 0 01-4 4H7a4 4 0 01-4-4V5zm16 3v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h7v2a3 3 0 003 3h2zm-.11-2a2 2 0 00-.476-.757l-1.657-1.657A2 2 0 0016 3.11V5a1 1 0 001 1h1.89z"
      fill="currentColor"
    />
    <path
      d="M9 12a1 1 0 100 2h6a1 1 0 100-2H9zM9 16a1 1 0 100 2h3a1 1 0 100-2H9z"
      fill="currentColor"
    />
  </svg>
);

export default Document;
