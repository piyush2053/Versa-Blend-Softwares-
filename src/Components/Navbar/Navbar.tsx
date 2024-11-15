import { useNavigate } from "react-router-dom";
import LOGO from "../../Assets/Logo/logo.png";
import BG from "../../Assets/Banner/banner.png";
import { Fragment } from "react/jsx-runtime";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <Fragment>
            <div className={`flex items-center justify-between py-[20px] px-[200px] text-white bg-vbs`}>
                <div className="flex items-center gap-2">
                    <p className="font-bold text-[30px]">VBS</p>
                    <div className="gap-4">
                        <button
                            className="bg-transparent hover:bg-blue-700 text-gray-800 py-1 px-4 rounded"
                            onClick={() => navigate("/")}
                        >
                            Home
                        </button>
                        <button
                            className="bg-transparent hover:bg-blue-700 text-gray-800 py-1 px-4 rounded"
                            onClick={() => navigate("/about")}
                        >
                            About
                        </button>
                        <button
                            className="bg-transparent hover:bg-blue-700 text-gray-800 py-1 px-4 rounded"
                            onClick={() => navigate("/contact")}
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
