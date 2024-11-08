const Navigation = () => (
  <nav className="border-b">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600">
              APY Calculator
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a
              href="/"
              className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="/"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Share
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <a
            href="https://github.com/AndreMiras/apy-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            About
          </a>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;