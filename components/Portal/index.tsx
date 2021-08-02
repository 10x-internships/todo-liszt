import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  id?: string;
  children?: React.ReactNode;
}

const Portal = ({ children, id = 'portal-container' }: PortalProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.getElementById(id)!) : null;
};

export default Portal;
