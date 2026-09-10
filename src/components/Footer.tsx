import logo from "../assets/nav-logo-ds.png"
const Footer = () => {
    return (
        <footer className="mt-20">
            <div className="divider"></div>
            <div className="container mx-auto grid grid-cols-5 gap-10 py-12">

                <div className="col-span-2">
                    <a href="/" className="flex items-center gap-2">
                        <img src={logo} alt="Dev Stack logo" className="w-10" />
                        <span className="text-2xl font-bold brand-gradient-text">
                            Dev Stack
                        </span>
                    </a>
                    <p className="text-[#475569] mt-4 max-w-sm">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>
                    <div className="flex gap-6 pt-2 font-semibold">
                        <a href="">GitHub</a>
                        <a href="">Twitter</a>
                        <a href="">LinkedIn</a>
                        
                    </div>
                </div>

                <ul className="space-y-3">
                    <li className="font-bold text-[#1E293B]">
                        PRODUCT
                    </li>
                    <li>
                        <a href="#technologies" className="text-[#475569]">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-[#475569]">
                            Technologies
                        </a>
                    </li>
                    <li>
                        <a href="#compare" className="text-[#475569]">
                            Projects
                        </a>
                    </li>
                </ul>

                <ul className="space-y-3">
                    <li className="font-bold text-[#1E293B]">
                        COMPANY
                    </li>
                    <li>
                        <a href="#about" className="text-[#475569]">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-[#475569]">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#careers" className="text-[#475569]">
                            Careers
                        </a>
                    </li>
                </ul>

                <ul className="space-y-3">
                    <li className="font-bold text-[#1E293B]">
                        LEGAL
                    </li>
                    <li>
                        <a href="#docs" className="text-[#475569]">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#guides" className="text-[#475569]">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </div>


            <div className="container mx-auto py-4">
                <div className="divider"></div>
                <div className="flex justify-between items-center text-[#475569]">
                    <p>
                        &copy; 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex gap-6  text-[#475569]">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;