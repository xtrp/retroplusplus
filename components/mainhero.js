import { newRetro } from "../lib/util";

export default function MainHero() {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative sm:rounded-2xl sm:overflow-hidden">
          <div className="relative px-4 py-8 sm:px-6 sm:py-24 lg:py-24 lg:px-8">
            <h1 className="text-center text-gray-700 text-3xl font-semibold sm:text-5xl lg:text-6xl">
              <div className="hidden md:block">
                <span className="block">
                  <span className="text-purple-700">Retro++</span>, the
                  intuitive app
                </span>
                <span className="block">for team retrospectives.</span>
              </div>
              <div className="block md:hidden">
                <span className="block">
                  The intuitive app for team retrospectives.
                </span>
              </div>
            </h1>
            <p className="mt-8 max-w-lg mx-auto text-center text-md text-left sm:text-center sm:text-xl md:text-2xl text-gray-400 sm:max-w-3xl">
              Retro++ is a simple and intuitive tool for team retrospectives.
              Start a retrospective now and share the link with your team!
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none flex justify-center">
              <div className="mx-auto inline-grid grid-cols-2 gap-3 sm:gap-5">
                <button
                  onClick={() => newRetro()}
                  className="transition-all flex items-center justify-center px-6 py-4 border border-transparent text-lg font-medium rounded-md bg-purple-600 text-white hover:bg-purple-700 sm:px-8"
                >
                  <span className="hidden sm:block">Start a</span>
                  <span className="block sm:hidden">New</span>&nbsp;Retro
                </button>
                <a
                  href="#features"
                  className="transition-all flex items-center justify-center px-6 py-4 border-2 border-purple-600 text-purple-600 text-lg font-medium rounded-md text-white hover:bg-purple-600 hover:text-white sm:px-8"
                >
                  Features
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
