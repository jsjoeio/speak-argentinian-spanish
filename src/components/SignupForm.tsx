import { useEffect, useState } from "react";

type State = "initial" | "loading" | "success" | "error" | "api-broken";

type SignupResponseData = {
  success: boolean;
};

type ResponseData = {
  totalCount: number;
};

type SignupFormProps = {
  source: string;
};
export function SignupForm({ source }: SignupFormProps) {
  const [state, setState] = useState<State>("api-broken");
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

  const handleSubmit = async (event) => {
    setState("loading");
    event.preventDefault();

    try {
      const searchParams = new URLSearchParams(document.location.search);
      const utmCampaign = searchParams.get("utm_campaign") || "none";
      const res = await fetch("/signup.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, utmCampaign, source }),
      });

      const data = (await res.json()) as SignupResponseData;

      if (data.success) {
        setState("success");
        location.href = "/thank-you";
      } else {
        setState("error");
      }
    } catch (error) {
      setState("error");
      console.error("uh oh", error);
    }
  };

  function renderSignup() {
    switch (state) {
      case "api-broken": {
        return (
          <iframe
            src="https://embeds.beehiiv.com/7dc3628a-03fd-47f6-917e-672611f182a8?slim=true"
            data-test-id="beehiiv-embed"
            height="52"
            frameBorder="0"
            scrolling="no"
            style={{
              margin: 0,
              borderRadius: "0px !important",
              backgroundColor: "transparent",
              width: "100%",
            }}
          ></iframe>
        );
      }
      case "initial": {
        return (
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
              Get the newsletter
            </button>
          </form>
        );
      }
      case "loading": {
        // Source: https://tailwind-elements.com/docs/standard/components/spinners/
        return (
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        );
      }
      case "success": {
        return (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Success!</span>
            </div>
          </div>
        );
      }
      case "error": {
        return (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                Failed to signup. Please reload and try again or email
                joe@speakargentinianspanish.com.
              </span>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  }
  return (
    <div className="max-w-lg" id="cta">
      {renderSignup()}
    </div>
  );
}
