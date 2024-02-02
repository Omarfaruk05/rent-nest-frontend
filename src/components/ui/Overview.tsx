/* eslint-disable @next/next/no-img-element */
import { Image } from "antd";
import overview1 from "../../assects/overview/overview-1.jpg";
import overview2 from "../../assects/overview/overview-2.jpg";
import overview3 from "../../assects/overview/overview-3.jpg";
import overview4 from "../../assects/overview/overview-4.jpg";

const Overview = () => {
  return (
    <div className="mt-12">
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="mx-4 my-8 md:grid grid-cols-2 gap-4 items-center">
            <div>
              <Image src={overview1.src} alt="overviewPic" />
            </div>
            <div>
              <h2 className="mb-4 text-teal-900 text-center">
                House Rent in Dhaka with RENTS [Easy Guideline]
              </h2>
              <p className="text-slate-500 md:text-xs lg:text-lg">
                Are you searching for house rent in Dhaka? Renting a house in
                Dhaka sounds to be a lengthy process. We’ll make that easier for
                you. RENTS Corporation (Real Estate Needs with Trusted
                Solutions) is the leading online rental platform to help you
                with any home rental queries. The best thing is you will the
                best house for rent within your budget. We’ve thousands of
                latest rental listings covering Uttara, Gulshan, Banani, and
                Baridhara areas. Whether you are looking for a semi-furnished
                apartment or a fully furnished apartment, we can assist you in
                renting both. Some tenants are concerned about the rental
                agreement. We maintain transparency both for owners and tenants.
                Overall, our goal is to make the house renting process
                hassle-free. Still, confused about how to start with? First of
                all, you should select “Rent” according to your requirements.
                After that, you can select your preferred areas, and
                requirements types. Owners can also post listings without any
                charge. We’ll work on your behalf to find a verified tenant for
                you. Along with this, we also assist in buying a home in Dhaka.
                Have you selected a listing? Contact us now to get the owner’s
                number. Then, you can visit the house to inspect it visually. If
                everything goes right,
              </p>
            </div>
          </div>
          <div className="mx-4 my-8 flex flex-col-reverse md:flex-row gap-4 items-center">
            <div className="md:w-1/2">
              <h2 className="mb-4 text-teal-900 text-center">
                Things To Consider Before House Rent in Dhaka
              </h2>
              <p className="text-slate-500 md:text-xs lg:text-lg">
                First thing first, you have to decide on a specific location
                where you would like to stay in Dhaka. Nobody likes a noisy
                area. Before you rent a flat in Dhaka, you should check the
                place how much noisy is it? Then, you need to know about the
                availability of Gas and Water in that area. Do you know that
                some areas in Dhaka don’t have proper Gas and Water
                availability? Before moving on, you should inspect the Gas and
                Water availability. Besides, it is important to have markets
                nearby. Otherwise, it may give you an unpleasant experience
                sooner or later. Safety is another big issue. Inspect the
                security system before renting a flat in Dhaka city. It will be
                an advantage if the property is surveillance with CCTV cameras.
                Last but not the least, budget is an important factor to
                consider when you are looking for rent in Dhaka. Talk to the
                property owner about the Advance you have to pay. Also, ask the
                owner about if any additional expenses you need to bear. If
                everything goes fine, you can rent flat in Dhaka. Now, I would
                like to inform you how to get Home Rent in Dhaka
              </p>
            </div>
            <div className="md:w-1/2">
              <Image src={overview2.src} alt="overviewPic" />
            </div>
          </div>
          <div className="mx-4 my-8 md:grid grid-cols-2 gap-4 items-center">
            <div>
              <Image src={overview3.src} alt="overviewPic" />
            </div>
            <div>
              <h2 className="my-8 text-teal-900 text-center">
                How to Get Houses For Rent in Dhaka?
              </h2>
              <p className="text-slate-500 md:text-xs lg:text-lg">
                You can rent a home both offline and online. The offline method
                has some hassles, You have to look for To-let boards and search
                manually. That doesn’t sound great at all. The second method is
                way more convenient. You can use the RENTS.com.bd website, one
                of the most popular online rental portals in Bangladesh. All you
                need to do is visit the website. Then, set your Property
                location, Property type, and Property Status. You will find the
                best available property rent in Dhaka at the best price. Right
                there, you can get the contact information and WhatsApp number.
                That is convenient, isn’t it?
              </p>
            </div>
          </div>
          <div className="mx-4 my-8 flex flex-col-reverse md:flex-row gap-4 items-center">
            <div className="md:w-1/2">
              <h2 className="lg:text-4xl mb-4 text-teal-900">
                Type of Property You can Rent in Dhaka:
              </h2>
              <ul className=" pl-4 text-slate-600 lg:text-4xl">
                <li>House Rent</li>
                <li>House Create</li>
                <li>Residential Apartment</li>
                <li>Furnished Apertment</li>
                <li>Luxury Apertment</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image src={overview4.src} alt="overviewPic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
