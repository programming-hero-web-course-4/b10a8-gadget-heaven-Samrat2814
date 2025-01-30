const Footer = () => {
  return (
    <div className="bg-[#F6F6F6] py-10 px-2 mt-8">
      <div>
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Gadget Heaven</h1>
          <p>Leading the way in cutting-edge technology and innovation.</p>
          <hr />
        </div>
        <div className="flex items-center justify-around footer text-base-content p-10">
          <nav>
            <h6 className="footer-title font-semibold">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title font-semibold">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
           
          </nav>
          <nav>
            <h6 className="footer-title font-semibold">Legal</h6>
            <a className="link link-hover">Terms of Service</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
