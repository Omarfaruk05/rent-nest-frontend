/* eslint-disable @next/next/no-img-element */
"use client";
import Partner1 from "../../assects/partnars/bdysjcokknzcmknhypdu.png";
import Partner2 from "../../assects/partnars/qqaxvcdmapyuvvs7kxwp.png";
import Partner3 from "../../assects/partnars/vygd2nce7y5w3yqz0bhs.png";
import Partner4 from "../../assects/partnars/xlderneyrnfwmpyedcaf.png";
import Partner5 from "../../assects/partnars/x9r0rl9nwmh4mwzbacbd.png";
import Partner6 from "../../assects/partnars/ttkwiw0yoe8e3yraqenx.png";
import Partner7 from "../../assects/partnars/sbed3v5s8ce3c63lg7iu.png";
import Partner8 from "../../assects/partnars/pog2szqopvvzo797sxno.png";
import Partner9 from "../../assects/partnars/ylaw6n44v0cdzzpgofjp.png";
import Partner10 from "../../assects/partnars/hp5nlipomnwspsfrutip.png";
import Partner11 from "../../assects/partnars/fakanf1ushwlastrv0se.png";
import Partner12 from "../../assects/partnars/bpv86xkbkmazajbaos3p.png";
import { Carousel, Image } from "antd";

const OurPartners = () => {
  const partners = [
    { partner: Partner1, key: 1 },
    { partner: Partner1, key: 2 },
    { partner: Partner2, key: 3 },
    { partner: Partner3, key: 4 },
    { partner: Partner4, key: 5 },
    { partner: Partner5, key: 6 },
    { partner: Partner6, key: 7 },
    { partner: Partner7, key: 8 },
    { partner: Partner8, key: 9 },
    { partner: Partner9, key: 10 },
    { Partner10, key: 11 },
    { Partner11, key: 12 },
    { Partner12, key: 13 },
  ];
  return (
    <div className="mt-12 mb-4 max-w-7xl mx-auto">
      <div className="mx-4">
        <h2 className=" text-center text-slate-500">Our Partners</h2>
        <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>
        <div className="text-center flex flex-wrap justify-center mx-auto gap-4">
          {partners.map(
            (partner) =>
              partner.partner && (
                <img
                  key={partner.key}
                  className="shadow-md px-3 rounded-md"
                  height={80}
                  src={partner.partner.src}
                  alt="HouseIcon"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
