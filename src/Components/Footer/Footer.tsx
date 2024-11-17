import {
    LinkedinFilled,
} from "@ant-design/icons";
import { Divider } from "antd";
import { Fragment } from "react/jsx-runtime";

export default function AppFooter() {
    return (
        <Fragment>
            <Divider className="bg-gray-300"/>
            <div
                className="text-gray-700 text-center py-6 bg-white px-[50px]"
            >
                <div className="items-start text-start text-xs">
                    <p>VBS Services in India are provided by Versa Blend Softwares. Users are advised to read the terms and conditions carefully.</p>
                    <p>When you visit or interact with our sites, services, applications, tools or messaging, we or our authorised service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster and safer experience and for advertising purposesz</p>
                    <p className="text-xs">
                        © {new Date().getFullYear()} VBS. All Rights Reserved.
                    </p>
                </div>
                <div>
                    <div className="flex flex-wrap mt-2 gap-3">
                        {/* <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 text-2xl hover:text-gray-400"
                        >
                            <FacebookOutlined />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 text-2xl hover:text-gray-400"
                        >
                            <TwitterOutlined />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 text-2xl hover:text-gray-400"
                        >
                            <InstagramOutlined />
                        </a> */}
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0A66C2] text-2xl hover:text-gray-400"
                        >
                            <LinkedinFilled />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
