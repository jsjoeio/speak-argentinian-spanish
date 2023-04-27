import { useEffect, useState } from "react";

type SignupResponseData = {
  success: boolean;
};

type ResponseData = {
  totalCount: number;
};

export function CTA() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("/signup.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as SignupResponseData;

      if (data.success) {
        location.href = "/thank-you";
      }
    } catch (error) {
      console.error("uh oh", error);
    }
  };

  const [waitlistCount, setWaitlistCount] = useState(null);
  const [email, setEmail] = useState("");
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
    <div className="grid gap-4">
      <div id="cta">
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-wrap gap-2"
        >
          <input
            className="block w-full max-w-xs placeholder:text-arg-white/80 py-2 px-4 rounded-md bg-transparent border-2 border-arg-blue focus:outline-arg-blue"
            type="email"
            id="12c97b2c-36a9-4f3f-9afb-8ee39992c2cd"
            name="answers[12c97b2c-36a9-4f3f-9afb-8ee39992c2cd]"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="capitalize text-center bg-arg-white text-black font-bold w-fit px-6 py-2 border-2 border-arg-white rounded-md transition-colors hover:bg-arg-blue focus:outline-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-arg-gold"
            type="submit"
          >
            Join the waitlist
          </button>
        </form>
      </div>
      <div className="flex items-center flex-wrap gap-4">
        <div className="flex items-center ml-4">
          {new Array(7).fill("").map((a, i) => (
            <img
              key={i} // I mean, it's not really going to change? so?
              src={`/assets/images/waitlist${i + 1}.jpg`}
              alt=""
              className="rounded-full border-4 border-arg-dark -ml-4"
            />
          ))}
        </div>
        <p>
          Join {waitlistCount} other{waitlistCount < 2 ? "" : "s"} unlocking
          Spanish
        </p>
      </div>
    </div>
  );
}
