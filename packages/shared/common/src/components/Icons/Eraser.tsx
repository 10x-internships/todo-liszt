const Eraser = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 20a1 1 0 011-1h14a1 1 0 110 2H7a1 1 0 01-1-1z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.879 6.879L17.12 3.12a3 3 0 00-4.242 0L2.12 13.88a3 3 0 000 4.242l1.707 1.707A4 4 0 006.657 21h2.686a4 4 0 002.829-1.172l8.707-8.707a3 3 0 000-4.242zm-5.172-2.343l3.758 3.757a1 1 0 010 1.414l-4.38 4.379-5.17-5.172 4.378-4.378a1 1 0 011.414 0zm-7.293 5.878l-4.878 4.879a1 1 0 000 1.414l1.707 1.707A2 2 0 006.657 19h2.686a2 2 0 001.414-.586l2.829-2.828-5.172-5.172z"
      fill="currentColor"
    />
  </svg>
);

export default Eraser;
