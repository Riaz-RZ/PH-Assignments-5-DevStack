import logo from "../assets/nav-logo-ds.png";
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto flex justify-between pt-4">
                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="Dev Stack logo" className="w-10" />
                    <span className="text-2xl font-bold brand-gradient-text">
                        Dev Stack
                    </span>
                </a>
                <ul className="flex gap-6 items-center font-semibold">
                    <li className="text-[#DB2777]"><a href="">Home</a></li>
                    <li className="text-[#475569]"><a href="">Technologies</a></li>
                    <li className="text-[#475569]"><a href="">Projects</a></li>
                    <li className="text-[#475569]"><a href="">About</a></li>
                    <li className="text-[#475569]"><a href="">Contact</a></li>
                </ul>
                <div>
                    <button className="font-semibold mx-2 cursor-pointer text-[#475569]">
                        Sign In
                    </button>

                    <button className="brand-gradient rounded-full text-white font-semibold mx-2 px-4 py-2 cursor-pointer">
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="divider"></div>
        </nav>
    );
};

export default Navbar;