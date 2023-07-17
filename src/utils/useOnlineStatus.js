import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isUserOnline, setIsUserOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsUserOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsUserOnline(false);
    });
  }, []);

  return { isUserOnline };
};

export default useOnlineStatus;
