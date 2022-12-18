const Footer = () => {
  return (
    <footer className="border-t border-neutral-700 w-screen">
      <div className="container mx-auto px-5">
        <div className="py-10 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Developed By Harry Alpha.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <div className="cursor-pointer rounded-lg mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              View Resume
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
