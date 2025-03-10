import * as React from 'react';

export const useWindowFocus = (onFocusChange: (hasFocus: boolean) => void) => {
  const [focus, setFocus] = React.useState(false);

  React.useEffect(() => {
    const handleFocus = () => {
      const hasFocus = window.document.hasFocus();

      if (hasFocus === focus) return;

      onFocusChange(hasFocus);
      setFocus(hasFocus);
    };

    handleFocus();

    window.addEventListener('focus', handleFocus);
    window.addEventListener('blur', handleFocus);

    return () => {
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('blur', handleFocus);
    };
  }, [focus, onFocusChange]);
};
