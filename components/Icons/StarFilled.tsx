import * as React from 'react';

const StarFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.082 3.128c.347-.805 1.489-.805 1.836 0l2.18 5.052a1 1 0 00.841.6l5.59.432c.898.07 1.254 1.196.56 1.769l-4.204 3.47a1 1 0 00-.334 1.012l1.294 5.229c.213.86-.715 1.55-1.478 1.102l-4.86-2.861a1 1 0 00-1.014 0l-4.86 2.86c-.763.45-1.69-.242-1.478-1.101l1.294-5.229a1 1 0 00-.334-1.011L1.91 10.98c-.693-.573-.337-1.7.56-1.769l5.59-.432a1 1 0 00.842-.6l2.18-5.052z"
      fill="currentColor"
    />
  </svg>
);

export default StarFilled;
