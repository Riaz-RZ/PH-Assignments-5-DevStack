import logo from "../assets/logo-text.png";
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white">
            <div className="container mx-auto flex justify-between pt-4">
                <a href=""><img src={logo} alt="" /></a>
                <ul className="flex gap-6 items-center font-semibold">
                    <li className="text-[#DB2777]"><a href="">Home</a></li>
                    <li className="text-[#475569]"><a href="">Technologies</a></li>
                    <li className="text-[#475569]"><a href="">Projects</a></li>
                    <li className="text-[#475569]"><a href="">About</a></li>
                    <li className="text-[#475569]"><a href="">Contact</a></li>
                </ul>
                <div>
                    <button className="font-semibold mx-2 cursor-pointer text-[#475569]">Sign In</button>
                    <button className="rounded-full text-white font-semibold bg-[#D91B7E] mx-2 px-4 py-2 cursor-pointer">Sign Up</button>
                </div>
            </div>
            <div className="divider"></div>
        </nav>
    );
};

export default Navbar;