import logo from '../assets/mw-logo1.png';

const Navbar = () => {
    return (
        <div className="h-[50px] w-full border-[1px] border-[#D9D9D9] shadow-[0_4px_20px_0_rgba(0,0,0,0.4)] flex items-center px-page-px py-[5px]">
            <img src={logo} alt="MachineWise logo here!" />
        </div>
    )
}

export default Navbar;