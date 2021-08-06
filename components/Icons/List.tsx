const List = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 3a4 4 0 00-4 4v12a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4v2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2V3z"
      fill="currentColor"
    />
    <path
      d="M8 11a1 1 0 100-2 1 1 0 000 2zM12 9a1 1 0 100 2h4a1 1 0 100-2h-4zM12 13a1 1 0 100 2h4a1 1 0 100-2h-4zM11 18a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM9 14a1 1 0 11-2 0 1 1 0 012 0zM8 19a1 1 0 100-2 1 1 0 000 2z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3H9a1 1 0 000 2h6a1 1 0 100-2zM9 1a3 3 0 000 6h6a3 3 0 100-6H9z"
      fill="currentColor"
    />
  </svg>
);

export default List;
