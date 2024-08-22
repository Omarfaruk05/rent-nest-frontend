"use client";

import { Button } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import RevelMotion from "../motions/RevelMotion";

const FooterComponent = () => {
  return (
    <Footer className="bg-gradient-to-r from-slate-600 to-slate-900">
      <div className="max-w-7xl mx-auto pt-4 pb-2 text-white">
        <div className="flex gap-8 flex-wrap justify-center md:justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex flex-wrap md:flex-row items-center justify-center w-full">
              <RevelMotion>
                <Button
                  className="-ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  ABOUT US
                </Button>
                |
              </RevelMotion>
              <RevelMotion>
                <Button
                  className="text-white hover:text-orange-600"
                  type="link"
                >
                  CNTACT US
                </Button>
                |
              </RevelMotion>
              <RevelMotion>
                <Button
                  className="text-white hover:text-orange-600"
                  type="link"
                >
                  CAREERS
                </Button>
                |
              </RevelMotion>
              <RevelMotion>
                <Button
                  className="text-white hover:text-orange-600"
                  type="link"
                >
                  PRIVACY POLICY
                </Button>
              </RevelMotion>
            </div>
            <RevelMotion>
              <p className="mb-1 mt-4">ContactNo: 01567900262</p>
            </RevelMotion>
            <RevelMotion>
              <p className="mb-1">Email: mdomarfaruk149518@gmail.com</p>
            </RevelMotion>
            <RevelMotion>
              <p className="mb-1">Office: Gazipur, Dhaka, Bangladesh</p>
            </RevelMotion>
          </div>
          <div>
            <RevelMotion>
              {" "}
              <h2>Property Type</h2>
            </RevelMotion>
            <div>
              <RevelMotion>
                <Button
                  className=" -ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  Luxury Apartment
                </Button>
              </RevelMotion>
            </div>
            <div>
              <RevelMotion>
                <Button
                  className=" -ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  Furnished Apartment
                </Button>
              </RevelMotion>
            </div>
            <div>
              <RevelMotion>
                <Button
                  className=" -ml-4 text-white hover:text-orange-600"
                  type="link"
                >
                  Un Furnished Apartment
                </Button>
              </RevelMotion>
            </div>
          </div>
          <div>
            <div className="flex">
              <RevelMotion>
                <FacebookOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              </RevelMotion>
              <RevelMotion>
                <TwitterOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              </RevelMotion>
              <RevelMotion>
                <InstagramOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              </RevelMotion>
              <RevelMotion>
                <YoutubeOutlined className="text-4xl ml-2 cursor-pointer hover:text-orange-500" />
              </RevelMotion>
            </div>
            <RevelMotion>
              {" "}
              <p className="mt-4 md:mt-20">© 2023 www.rent-next.com</p>
            </RevelMotion>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
