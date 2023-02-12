import { useState, useEffect } from "react";

type ResponseData = {
    totalCount: number
}
export function ThankYou() {
    const [waitlistCount, setWaitlistCount] = useState(null);
    useEffect(() => {
        async function fetchWaitlistTotal() {
            setWaitlistCount(null);
            const res = await fetch("/getWaitlistTotal.json");
            const data = await res.json() as ResponseData
            if (!ignore) {
                setWaitlistCount(data.totalCount);
            }
        }

        let ignore = false;
        fetchWaitlistTotal();
        return () => {
            ignore = true;
        }
    }, []);
    return <div className="mt-16 mb-48 text-primary">
        <h1 className="leading-relaxed text-center font-semibold tracking-tighter text-5xl mb-8">Thank you!</h1>
        <img className="mb-8" src="https://media.giphy.com/media/W1TPavKSPEVVjz4LAJ/giphy.gif" />
        <p className="mb-8">It's great to have you on the waitlist. </p>
        <p className="mb-8">Once the waitlist has 100 signups, I will email you the course outline and ask for your feedback.</p>

        {waitlistCount && (

            <div>
                <h2>Total Signups</h2>
                <small>{waitlistCount}/100</small>
                <progress className="progress w-full" value={waitlistCount} max="100"></progress>
            </div>
        )}
    </div>
}