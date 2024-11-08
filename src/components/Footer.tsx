const Footer = () => (
  <footer className="bg-gray-200 text-center text-gray-500 text-sm p-4">
    {new Date().getFullYear()} APY Calculator. MIT Licensed. View on{" "}
    <a
      href="https://github.com/AndreMiras/apy-calculator"
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
    >
      GitHub
    </a>
  </footer>
);
export default Footer;
