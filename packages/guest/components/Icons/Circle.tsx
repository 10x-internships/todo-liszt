interface CircleLineProps extends React.SVGProps<SVGSVGElement> {
  circleFill?: string;
}

export const CircleLine = ({ circleFill, ...others }: CircleLineProps) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...others}
  >
    <path
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      fill={circleFill}
      stroke="#777E91"
      strokeWidth={2}
    />
  </svg>
);

export const CircleFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={10} fill="currentColor" />
  </svg>
);
