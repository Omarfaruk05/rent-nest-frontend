"use client";

import { Button } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const FooterComponent = () => {
  return (
    <Footer className="bg-gradient-to-r from-slate-600 to-slate-900">
      <div className="max-w-7xl mx-auto pt-4 pb-2 text-white">
        <div>
          <div className="flex gap-4 flex-wrap justify-around">
            <div>
              <Button
                className="-ml-4 text-white hover:text-orange-600"
                type="link"
              >
                ABOUT US
              </Button>
              |
              <Button className="text-white hover:text-orange-600" type="link">
                CNTACT US
              </Button>
              |
              <Button className="text-white hover:text-orange-600" type="link">
                CAREERS
              </Button>
              |
              <Button className="text-white hover:text-orange-600" type="link">
                PRIVACY POLICY
              </Button>
              <p className="mb-1 mt-4">ContactNo: 01567900262</p>
              <p className="mb-1">Email: mdomarfaruk149518@gmail.com</p>
              <p className="mb-1">Office: Gazipur, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h2>Property Type</h2>
              <div>
                <Button
                  className=" -ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  Luxury Apartment
                </Button>
              </div>
              <div>
                <Button
                  className=" -ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  Furnished Apartment
                </Button>
              </div>
              <div>
                <Button
                  className=" -ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  Un Furnished Apartment
                </Button>
              </div>
            </div>
            <div>
              <FacebookOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              <TwitterOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              <InstagramOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              <YoutubeOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              <p className="mt-4 md:mt-20">© 2023 www.rent-next.com</p>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
