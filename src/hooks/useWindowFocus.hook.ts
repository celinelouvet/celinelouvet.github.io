'use client';

import { useEffect, useState } from 'react';

export const useWindowFocus = (focusChange: (hasFocus: boolean) => void) => {
  const document = window && window.document;

  const [focus, setFocus] = useState(false);

  useEffect(() => {
    const handleFocus = () => {
      const hasFocus = document.hasFocus();

      if (hasFocus === focus) return;

      focusChange(hasFocus);
      setFocus(hasFocus);
    };

    handleFocus();

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleFocus);
    };
  }, [document, focus, focusChange]);
};
