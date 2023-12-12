"use client";
import React, { useState, useContext, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import { InputContext } from "@/app/page";
import AOS from "aos";
import "aos/dist/aos.css";

const Search = () => {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing type
    });
  }, []);
  return (
    <div className="bg-slate-50 rounded-lg p-4 md:p-8 md:h-full w-[100%] md:w-[30%]">
      <h1
        className="font-semibold text-start mb-4 text-[1.5em] flex justify-start items-center"
        data-aos="fade-in"
      >
        
        Word<span>Finder</span>
      </h1>
      <div
        className="p-4 rounded-lg bg-slate-100 flex items-center justify-center"
        data-aos="fade-in"
      >
        <input
          type="search"
          name=""
          id="search"
          placeholder="Search for Meaning..."
          className="rounded-lg bg-slate-100 outline-none border-none text-[20px] w-[100%]"
          onChange={handleInputChange}
          value={value}
          onKeyDown={handleInputKeyDown}
        />
        <button onClick={handleSubmit}>
          <MdSearch size={30} className="text-primary" />
        </button>
      </div>
    </div>
  );
};

export default Search;
