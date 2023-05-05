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

const URL = "https://speakargentinianspanish.com";
const shortDescription = "Signup to learn Argentinian Spanish with me!";
const longTitle = "Learn Argentinian Spanish with me!";
const longDescription =
  "Signup to learn Argentinian Spanish with me! We need 100 signups to make this happen!";
const shortTitle = "Learn Argentinian Spanish!";

export function ThankYou() {
  return (
    <div className="mt-16 mb-48">
      <h1 className="leading-relaxed text-center font-semibold tracking-tighter text-5xl mb-8">
        Thank you!
      </h1>
      <img
        className="mb-8"
        src="https://media.giphy.com/media/W1TPavKSPEVVjz4LAJ/giphy.gif"
      />
      <p className="mb-8">It's great to have you in the community. </p>
      <p className="mb-8">
        <strong className="uppercase underline">important:</strong> Check your
        email and confirm your signup.
      </p>
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
