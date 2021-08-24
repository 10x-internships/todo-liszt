const Burger = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 8a1 1 0 000 2h14a1 1 0 100-2H5zM5 14a1 1 0 100 2h14a1 1 0 100-2H5z"
      fill="currentColor"
    />
  </svg>
);

export default Burger;
