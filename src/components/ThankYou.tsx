import { useState, useEffect } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

type ResponseData = {
  totalCount: number;
};

const URL = "https://speakargentinianspanish.com";
const shortDescription = "Signup to learn Argentinian Spanish with me!";
const longTitle = "Learn Argentinian Spanish with me!";
const longDescription =
  "Signup to learn Argentinian Spanish with me! We need 100 signups to make this happen!";
const shortTitle = "Learn Argentinian Spanish!";

export function ThankYou() {
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
    <div className="mt-16 mb-48">
      <h1 className="leading-relaxed text-center font-semibold tracking-tighter text-5xl mb-8">
        Thank you!
      </h1>
      <img
        className="mb-8"
        src="https://media.giphy.com/media/W1TPavKSPEVVjz4LAJ/giphy.gif"
      />
      <p className="mb-8">It's great to have you on the waitlist. </p>
      <p className="mb-8">
        Once the waitlist has 100 signups, I will email you the course outline
        and ask for your feedback.
      </p>

      {waitlistCount ? (
        <div className="mb-8">
          <h2>Total Signups</h2>
          <small>{waitlistCount}/100</small>
          <progress
            className="progress w-full"
            value={waitlistCount}
            max="100"
          ></progress>
        </div>
      ) : null}
      <h2 className="leading-relaxed text-center font-semibold tracking-tighter text-4xl mb-8">
        Spread the word!
      </h2>
      <div className="flex flex-row items-center justify-center">
        <EmailShareButton subject={shortTitle} url={URL} body={longDescription}>
          <EmailIcon size={32} round />
        </EmailShareButton>
        <FacebookShareButton quote={shortTitle} url={URL}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <LinkedinShareButton
          title={shortTitle}
          url={URL}
          summary={longDescription}
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <RedditShareButton title={shortTitle} url={URL}>
          <RedditIcon size={32} round />
        </RedditShareButton>
        <TelegramShareButton title={shortTitle} url={URL}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton title={shortTitle} url={URL}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton title={shortTitle} url={URL}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
}
