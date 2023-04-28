import { useEffect, useState } from "react";

type ResponseData = {
  totalCount: number;
};

export function WaitlistSection() {
  const [waitlistCount, setWaitlistCount] = useState(null);

  useEffect(() => {
    async function fetchWaitlistTotal() {
      setWaitlistCount(null);
      const res = await fetch("/getWaitlistTotal.json");
      const data = (await res.json()) as ResponseData;
      if (!ignore) {
        setWaitlistCount(data.totalCount);
      }
    }

    let ignore = false;
    fetchWaitlistTotal();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <p>
      Join {waitlistCount} other{waitlistCount < 2 ? "" : "s"} unlocking Spanish
    </p>
  );
}
