"use client";

import TextInput from "../TextInput";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
  setLetterType,
  setClientName,
  setLetterText,
} from "@app/store/coverLetterSlice";

const ConverLetterForm = () => {
  const dispatch = useDispatch();
  const coverLetter = useSelector((state) => state.cover_letter);
  if (coverLetter.letterType === "web_dev" && coverLetter.letterText === "") {
    var tempLetterText = `We are writing to express our interest in your web development project. As a company with extensive experience in web development and a track record of delivering exceptional results for our clients, we are confident that we would be the ideal partner for your project.
<p class = 'py-1'></p>
At Soft Enterprise, we understand that your website is often the first point of contact between your business and your customers. As such, we are committed to migrate your website to the sharepoint.
<p class = 'py-1'></p>
Our team of experienced web developers, designers, and project manager work closely with clients to understand their specific needs and requirements. We have expertise in a wide range of technologies including Wordpress, Laravel, Angular, PHP, Share Point, Vue.Js, React, Shopify, Python and more. We are always exploring new and innovative approaches to web development.
<p class = 'py-1'></p>
At every stage of the project, we prioritize communication and collaboration to ensure that you are fully involved in the process and the final product meets your expectations. We are dedicated to delivering projects on time and within budget, and we offer going support and maintenance to ensure that your website continues to perform at its best.
<p class = 'py-1'></p>
Thank you for considering Soft Enterprise for your web development needs. We are excited at the prospect of working with you and creating a website that will help your business succeed.
<p class = 'py-1'></p>
Sincerely,`;
  } else {
    var tempLetterText = coverLetter.letterText;
  }

  const [letterText, setletterText] = useState(tempLetterText);
  const [clientName, setclientName] = useState(coverLetter.clientName);
  const [letterType, setletterType] = useState(coverLetter.letterType);
  const selectOptions = [
    { value: "web_dev", label: "Web Development" },
    { value: "web_design", label: "Web Design" },
    // ...
  ];
  const textareaRef = useRef();
  const handleSave = () => {
    dispatch(
      setLetterText(letterText.replace(/\n/g, "<p class = 'py-1'></p>"))
    );
    dispatch(setClientName(clientName));
    dispatch(setLetterType(letterType));
  };

  useEffect(() => {
    handleSave();
  }, [letterText, clientName]);

  return (
    <div className="overflow-y-visible custom-scroll mt-5 h-fit custom-bg w-[900px] py-12 px-12 rounded-2xl border-2 border-color">
      <div className="">
        <div className="flex justify-center items-start h-fit my-5">
          <div className="flex items-center w-[50%]">
            <label className="text-gray-900 text-[16px] font-medium my-2 w-[40%]">
              Letter Type
            </label>
            <Select
              className="w-[60%] rounded-md font-normal border-2 border-color outline-none"
              options={selectOptions}
              placeholder={
                letterType === "web_dev" ? "Web Development" : "Web Design"
              }
              value={letterType}
              onChange={(event) => {
                setletterType(event.value);
                if (event.value == "web_dev") {
                  textareaRef.current.value = `We are writing to express our interest in your web development project. As a company with extensive experience in web development and a track record of delivering exceptional results for our clients, we are confident that we would be the ideal partner for your project.

At Soft Enterprise, we understand that your website is often the first point of contact between your business and your customers. As such, we are committed to migrate your website to the sharepoint.

Our team of experienced web developers, designers, and project manager work closely with clients to understand their specific needs and requirements. We have expertise in a wide range of technologies including Wordpress, Laravel, Angular, PHP, Share Point, Vue.Js, React, Shopify, Python and more. We are always exploring new and innovative approaches to web development.

At every stage of the project, we prioritize communication and collaboration to ensure that you are fully involved in the process and the final product meets your expectations. We are dedicated to delivering projects on time and within budget, and we offer going support and maintenance to ensure that your website continues to perform at its best.

Thank you for considering Soft Enterprise for your web development needs. We are excited at the prospect of working with you and creating a website that will help your business succeed.

Sincerely,`;
                }
                if (event.value == "web_design") {
                  textareaRef.current.value = `Testing web design template`;
                }
                setletterText(textareaRef.current.value);
              }}
              styles={{
                container: (base) => ({
                  ...base,
                  // width: '100%',
                }),
                control: (base) => ({
                  ...base,
                  height: "auto",
                  fontSize: "18px",
                  border: "none",
                  outline: "none",
                }),
                option: (base) => ({
                  ...base,
                  fontSize: "18px",
                  transition: "all 0.2s ease",
                  ":hover": {
                    background: "#60a5fa",
                  },
                  zIndex: 999,
                }),
              }}
            />
          </div>

          <div className="w-[50%]">
            <div className={`flex justify-between items-center w-[100%]`}>
              <label
                className={`text-gray-900 text-[16px] font-medium flex-end pe-10 w-[40%]`}
              >
                Client Name
              </label>
              <input
                autoFocus
                className={`text-gray-900  text-[14px] font-normal p-2 rounded-md border-2 border-color outline-none rounded-md font-normal border-2 border-color outline-none w-[60%]`}
                onChange={(event) => {
                  setclientName(event.target.value);
                }}
                value={clientName}
              />
              <p className="text-red-500 text-sm">{}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center  my-10">
          <label className="text-gray-900 text-[16px] font-medium my-2 w-[20%]">
            Letter Text
          </label>
          <textarea
            ref={textareaRef}
            cols={"auto"}
            rows="5"
            onChange={(e) => setletterText(e.target.value)}
            className="text-gray-900 text-lg p-2 rounded-md font-normal outline-none resize-none rounded-md font-normal border-2 border-color outline-none w-[80%]"
            // defaultValue={overview.trim().replace(/<br\s*\/?>/g, '\n')}
          >
            {letterText
              .trim()
              .replace(/<p\s*[^>]*>/g, "\n")
              .replace(/<\/p>/g, "")}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default ConverLetterForm;
