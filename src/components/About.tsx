export function About() {
  return (
    <div className="mx-auto prose lg:prose-xl mb-2 sm:mb-4">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row not-prose border-4 border-arg-dark p-4 sm:p-6 rounded">
        <img
          src="https://avatars.githubusercontent.com/u/3806031?v=4"
          alt="avatar of Joe Previte"
          className="w-24 h-24 rounded-full md:justify-self-start border-arg-dark border-2"
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-xl md:text-2xl font-semibold">
            Hola, soy Joe 👋
          </h4>
          <p>
            I studied abroad in Buenos Aires in 2013. Now I’m teaching my
            daughter Argentinian Spanish 🇦🇷. I created this course because it’s
            something <em>I wish existed</em> when I was first starting.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
