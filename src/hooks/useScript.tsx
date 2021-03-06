import { useEffect } from 'react';

const useScript = (url: string) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = false;

    document.body.appendChild(script);
    console.log('script loaded ' + url);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
