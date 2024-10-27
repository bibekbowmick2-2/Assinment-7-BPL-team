import myImage1 from '../../../assets/logo.png';
const Footer = () => {
    return (
        <div className=" bg-gray-800 text-white p-10">
            <div className="mx-auto max-w-screen-xl mb-10">
            
            </div> 
            <footer className="footer max-w-screen-xl mx-auto">
            <div className="w-[100px] mx-auto items-center"><img className="w-full h-full" src={myImage1} alt="" /></div>
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
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>

                
            </footer>
            <hr className="border-slate-700 mt-8"/>
                <p className="text-center mt-5 text-zinc-400">@2024 Your Company All Rights Reserved</p>
        </div>
    );
};

export default Footer;