/* eslint-disable @next/next/no-img-element */
import { Button, Carousel } from "antd";
import BannerImg1 from "../../assects/banner.jpeg";
import BannerImg2 from "../../assects/banner2.jpg";
import BannerImg3 from "../../assects/banner3.jpg";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

const Overview = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* carusel  */}
        <Carousel autoplay effect="fade" className="mt-12">
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg1.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-[#033c79] to-[#0bc29512] bg-opacity-50">
              <h1>Explore your future home with detailed videos </h1>
              <p className="md:my-2 text-lg">View your dream houses online</p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md md:mt-4 text-teal-700 font-semibold">
                  View Now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg2.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-gray-900 to-[#0bc29512] bg-opacity-50">
              <h1>Discover impresive virtual property tours </h1>
              <p className="md:my-2 text-lg">
                Explore properties form the comfort of your home
              </p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md md:mt-4 text-teal-700 font-semibold">
                  View Now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              className="rounded-lg mx-auto w-[350px] h-[200px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px]"
              src={BannerImg3.src}
              alt=""
            />
            <div className="absolute top-0 left-0 md:pt-12 pl-8 text-gray-200 h-full mx-auto w-[350px] sm:w-[680px] md:w-[840px] lg:w-[9800px] xl:w-[1250px] rounded-md bg-gradient-to-r from-lime-900 to-[#0bc29512] bg-opacity-50">
              <h1>Discover impresive virtual property tours </h1>
              <p className="md:my-2 text-lg">
                Explore properties form the comfort of your home
              </p>
              <Link href={"/houses"}>
                <Button className="bg-white px-12 rounded-md md:mt-4 text-teal-700 font-semibold">
                  View Now <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </Carousel>
        <div>
          <h1 className=" text-center text-slate-500">Overviews</h1>
          <div className="mx-auto h-[2px] w-20 bg-slate-800 mt-3"></div>

          <div className="my-4 mx-4">
            <h2 className="my-8 text-teal-900 text-center">
              House Rent in Dhaka with RENTS [Easy Guideline]
            </h2>
            <p className="text-slate-500">
              Are you searching for house rent in Dhaka? Renting a house in
              Dhaka sounds to be a lengthy process. We’ll make that easier for
              you. RENTS Corporation (Real Estate Needs with Trusted Solutions)
              is the leading online rental platform to help you with any home
              rental queries. The best thing is you will the best house for rent
              within your budget. We’ve thousands of latest rental listings
              covering Uttara, Gulshan, Banani, and Baridhara areas. Whether you
              are looking for a semi-furnished apartment or a fully furnished
              apartment, we can assist you in renting both. Some tenants are
              concerned about the rental agreement. We maintain transparency
              both for owners and tenants. Overall, our goal is to make the
              house renting process hassle-free. Still, confused about how to
              start with? First of all, you should select “Rent” according to
              your requirements. After that, you can select your preferred
              areas, and requirements types. Owners can also post listings
              without any charge. We’ll work on your behalf to find a verified
              tenant for you. Along with this, we also assist in buying a home
              in Dhaka. Have you selected a listing? Contact us now to get the
              owner’s number. Then, you can visit the house to inspect it
              visually. If everything goes right,
            </p>
          </div>
          <div className="my-4 mx-4">
            <h2 className="my-8 text-teal-900 text-center">
              Things To Consider Before House Rent in Dhaka
            </h2>
            <p className="text-slate-500">
              First thing first, you have to decide on a specific location where
              you would like to stay in Dhaka. Nobody likes a noisy area. Before
              you rent a flat in Dhaka, you should check the place how much
              noisy is it? Then, you need to know about the availability of Gas
              and Water in that area. Do you know that some areas in Dhaka don’t
              have proper Gas and Water availability? Before moving on, you
              should inspect the Gas and Water availability. Besides, it is
              important to have markets nearby. Otherwise, it may give you an
              unpleasant experience sooner or later. Safety is another big
              issue. Inspect the security system before renting a flat in Dhaka
              city. It will be an advantage if the property is surveillance with
              CCTV cameras. Last but not the least, budget is an important
              factor to consider when you are looking for rent in Dhaka. Talk to
              the property owner about the Advance you have to pay. Also, ask
              the owner about if any additional expenses you need to bear. If
              everything goes fine, you can rent flat in Dhaka. Now, I would
              like to inform you how to get Home Rent in Dhaka
            </p>
          </div>
          <div className="my-4 mx-4">
            <h2 className="my-8 text-teal-900 text-center">
              How to Get Houses For Rent in Dhaka?
            </h2>
            <p className="text-slate-500">
              You can rent a home both offline and online. The offline method
              has some hassles, You have to look for To-let boards and search
              manually. That doesn’t sound great at all. The second method is
              way more convenient. You can use the RENTS.com.bd website, one of
              the most popular online rental portals in Bangladesh. All you need
              to do is visit the website. Then, set your Property location,
              Property type, and Property Status. You will find the best
              available property rent in Dhaka at the best price. Right there,
              you can get the contact information and WhatsApp number. That is
              convenient, isn’t it?
            </p>
          </div>
          <div className="my-4 mx-8">
            <h2 className="my-8 text-teal-900 text-center">
              Type of Property You can Rent in Dhaka:
            </h2>
            <ul className="font-semibold text-slate-600">
              <li>House Rent</li>
              <li>House Create</li>
              <li>Residential Apartment</li>
              <li>Furnished Apertment</li>
              <li>Luxury Apertment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
