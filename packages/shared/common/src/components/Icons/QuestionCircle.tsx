const QuestionCircle = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.133 9.5a1 1 0 11-1.731-1A3 3 0 0115 10c0 1.098-.673 1.994-1.5 2.5-.664.406-.25 1.5-1.503 1.5a1 1 0 01-.994-1.104c.027-.529.263-.96.52-1.272.271-.33.628-.6.9-.762 1.517-.902-.333-2.747-1.29-1.361zm.864 5.5a1 1 0 100 2 1 1 0 000-2z"
      fill="currentColor"
    />
  </svg>
);

export default QuestionCircle;
