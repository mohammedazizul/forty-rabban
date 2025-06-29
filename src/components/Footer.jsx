function Footer() {
  return (
    <footer className="w-full py-4 px-4 sm:px-6 md:px-8 mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Forty Rabbana Collection</p>
          <p className="mt-1">
            May Almighty Allah bless us with understanding and implementation
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
