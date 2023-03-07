export function About() {
  return (
    <div className="pt-12 prose">
      <hr />
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img
          src="https://avatars.githubusercontent.com/u/3806031?v=4"
          alt="avatar of Joe Previte"
          className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-800 border-2"
        />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold">Hola, soy Joe 👋</h4>
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
