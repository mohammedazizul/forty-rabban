function Footer() {
  return (
    <footer className="w-full py-4 px-4 sm:px-6 md:px-8 mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center text-sm space-y-2">
          <p>
            © {new Date().getFullYear()} Forty Rabbana - 40 Beautiful Duas from
            Al Quran
          </p>
          {/* 
          <p>
            May Almighty Allah bless us with understanding and implementation of
            these beautiful supplications
          </p> 
          */}
          <p className="mt-2 text-xs opacity-80">
            Developed with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/mohammedazizul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Mohammed Azizul
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
