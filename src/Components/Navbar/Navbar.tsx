import { useNavigate, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path:any) => location.pathname === path ? "font-bold text-white" : "text-gray-300";

    return (
        <Fragment>
            <div className={`flex items-center justify-between py-[4px] px-10 text-white bg-vbs`}>
                <div className="flex items-center gap-1">
                    <p className="font-bold text-[18px]">VBS</p>
                    <p className="font-thin text-[13px] ml-2">| Versa Blend Softwares</p>
                    {/* <p className="ml-10">|</p> */}
                    {/* <div className="gap-4">
                        <button
                            className={`bg-transparent hover:text-white hover:z-50 transition hover:scale-110 py-1 px-4 rounded ${isActive("/")}`}
                            onClick={() => navigate("/")}
                        >
                            Home
                        </button>
                        <button
                            className={`bg-transparent hover:text-white hover:z-50 transition hover:scale-110 py-1 px-4 rounded ${isActive("/about")}`}
                            onClick={() => navigate("/about")}
                        >
                            About
                        </button>
                        <button
                            className={`bg-transparent hover:text-white hover:z-50 transition hover:scale-110 py-1 px-4 rounded ${isActive("/contact")}`}
                            onClick={() => navigate("/contact")}
                        >
                            Contact
                        </button>
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}
