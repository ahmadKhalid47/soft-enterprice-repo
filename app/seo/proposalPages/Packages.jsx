"use client";
import seo3 from "@public/assets/socialMedia/seo3.png";
import seo12 from "@public/assets/socialMedia/seo12.png";
import { FaCheck,FaTimes } from "react-icons/fa";

import { useSelector } from "react-redux";

function Packages(prop) {
  let packages = useSelector((state) => state.package_seo);
  function addCommasToNumber(number) {
    let numberString = number.toString();
    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numberString;
  }
  return (
    <div className="w-[8.27in] h-[1123px] bg-white shadow-lg">
      <div className="flex flex-col justify-center items-center h-[100%] bg-red-20 relative">
        <div className="flex-end w-full h-[15%] absolute top-0 overflow-hidden ">
          <img src={seo3.src} className="h-full" />
        </div>
        <div className="flex w-full h-[50%] absolute top-0 overflow-hidden">
          <div className="absolute w-[87%] h-[50%] right-[6.5%] top-[120px] z-[200] bg-red-90">
            <div className="flex flex-col justify-center w-full leading-none">
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Search Engine
              </span>
              <span className="text-[#00A2FF] text-[44px] font-[600]">
                Optimization Packages
              </span>
              <div className="w-[70px] h-[5px] bg-yellow-400 my-3"></div>
            </div>
            <div className="flex flex-col justify-center w-full leading-snug">
              <span className="text-[white text-[15px] font-[400] text-justify">
                Unlock your brand's potential on a search engine with our
                professional advertisement design packages. Leave your
                competition in the dust with our cutting-edge solutions.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[87%] h-fit absolute top-[25%] overflow-hidden">
          <div className="flex items-end justify-between w-[100%] h-[200px] relative">
            <img src={seo12.src} className="w-[25%]" />
            <div className="flex justify-between items-end w-[65%] h-[100%]">
              <div className="relative flex flex-col items-center justify-center w-[33%] h-[100%] overflow-hidden">
                <div className="flex items-center w-[100%] h-[50%] bg-[rgb(0,161,255)] z-[50]">
                  <div className="h-[50%] w-full flex flex-col justify-center items-center leading-tight">
                    <h1 className="text-[32px] font-[600] text-[#ffd600]">
                      Basic
                    </h1>
                    <h2 className="text-[22px] font-[600] text-white">
                      <span className="text-[14px] font-[300]">{packages.basicCurrency} </span>
                      {addCommasToNumber(packages.basic)}
                    </h2>
                    <span className="text-[12px] font-[600] text-white">
                      Per Month
                    </span>
                  </div>
                </div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute left-[0%]  bottom-[16%] rotate-[25deg]  z-[0]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute right-[0%] bottom-[16%] rotate-[-25deg] z-[0]"></div>
              </div>
              <div className="relative flex flex-col items-center justify-center w-[33%] h-[100%] overflow-hidden">
                <div className="flex items-center w-[100%] h-[50%] bg-[rgb(0,161,255)] z-[50]">
                  <div className="h-[50%] w-full flex flex-col justify-center items-center leading-tight">
                    <h1 className="text-[32px] font-[600] text-[#ffd600]">
                      Standard
                    </h1>
                    <h2 className="text-[22px] font-[600] text-white">
                      <span className="text-[14px] font-[300]">{packages.basicCurrency} </span>
                      {addCommasToNumber(packages.standard)}
                    </h2>
                    <span className="text-[12px] font-[600] text-white">
                      Per Month
                    </span>
                  </div>
                </div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute left-[0%]  bottom-[16%] rotate-[25deg]  z-[0]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute right-[0%] bottom-[16%] rotate-[-25deg] z-[0]"></div>
              </div>
              <div className="relative flex flex-col items-center justify-center w-[33%] h-[100%] overflow-hidden">
                <div className="flex items-center w-[100%] h-[50%] bg-[rgb(0,161,255)] z-[50]">
                  <div className="h-[50%] w-full flex flex-col justify-center items-center leading-tight">
                    <h1 className="text-[32px] font-[600] text-[#ffd600]">
                      Premium
                    </h1>
                    <h2 className="text-[22px] font-[600] text-white">
                      <span className="text-[14px] font-[300]">{packages.basicCurrency}</span>
                      {addCommasToNumber(packages.premium)}
                    </h2>
                    <span className="text-[12px] font-[600] text-white">
                      Per Month
                    </span>
                  </div>
                </div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute left-[0%]  bottom-[16%] rotate-[25deg]  z-[0]"></div>
                <div className="flex items-end w-[100px] h-[100px] bg-[rgb(0,161,255)] absolute right-[0%] bottom-[16%] rotate-[-25deg] z-[0]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[87%] h-[45%] absolute top-[45%]">
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center text-center">
              Unique Article Submission
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center">
              Upto 2
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center">
              Upto 4
            </span>
            <span className="w-[23%] h-[100%] flex justify-center items-center text-center">
              Upto 10
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center text-center">
              Targeted Keyword
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center">
              Upto 5
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center">
              Upto 10
            </span>
            <span className="w-[23%] h-[100%] flex justify-center items-center text-center">
              Upto 20
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center text-center">
              Reporting
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center">
              Monthly
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center">
              Semi-Monthly
            </span>
            <span className="w-[23%] h-[100%] flex justify-center items-center text-center">
              Weekly
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Technical SEO (Robots.txt,Sitemap etc)
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Internal Link Building
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Website Audit
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Keyword Research
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Meta Title & Description
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Schema Markup Organization
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Quality Guest Posts
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Google Analytic Integration & Ongoing Review
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Website Layout & Content Optimization
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              301 & 404 Optimization & Fixing
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Social Media Marketing (Basic)
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
          <div className="w-full flex justify-start gap-[%] items-center text-[14px] border-b-[thin] border-gray-300 py-1">
            <span className="w-[35.5%] h-[100%] flex justify-start items-center">
              Google Search Console Error Fixing
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-red-500">
              <FaTimes />
            </span>
            <span className="w-[21%] h-[100%] flex justify-center items-center text-center text-green-400">
              <FaCheck />
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 h-[110px] w-[100%] overflow-hidden bg-red-40">
          <div className="flex justify-between items-center w-full px-14 h-full absolute top-[18%] left-0 z-[50]">
            <span className="text-gray-700 text-[15px] font-[500]">
              Search Engine Optimization Proposal
            </span>
            <span className="text-gray-700 text-[15px] font-[500]">
              {prop.pageNumber < 10 ? "0" + prop.pageNumber : prop.pageNumber}
            </span>
          </div>
          <div className="w-[110%] h-[90%] bg-[rgb(255,246,203)] absolute left-[-5%] top-[55%] rotate-[7deg]"></div>
          <div className="w-[110%] h-[90%] bg-[rgb(204,236,255)] absolute left-[-5%] top-[60%] rotate-[7deg]"></div>
        </div>
      </div>
    </div>
  );
}
export default Packages;
