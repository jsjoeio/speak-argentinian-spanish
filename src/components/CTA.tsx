import React from "react"

export function CTA() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")

    return (
        <div className="text-center text-primary my-24">
            <h3 className="text-5xl leading-relaxed tracking-tighter">Speak like a native</h3>
            <p className="text-sm mb-3">Reach your fluency goals 2x faster. Guaranteed.</p>
            <form>
                <input className="block mx-auto w-48 placeholder:text-slate-400 py-2 px-4 rounded-md mb-2" placeholder="Your name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input className="block mx-auto w-48 placeholder:text-slate-400 py-2 px-4 rounded-md mb-2" type="text" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className="text-center block bg-arg-gold b-arg-gold-dark text-black font-bold w-fit px-6 py-3 rounded-md mx-auto mt-4" type="submit" value="Join the waitlist" />
            </form>
        </div>
    )
}