const Footer = () => {
  return (
    <div className="bg-[#F6F6F6] py-10 px-20">
      <div>
        <div className="text-center flex flex-col gap-4">
          <h1>Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
          <hr />
        </div>
        <div className="flex items-center justify-around footer text-base-content p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
