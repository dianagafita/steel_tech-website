import React from "react";

export default function Input({ name, label, type, moreStyle, ...props }) {
  return (
    <p className="p-2 w-full text-[16px]">
      {type === "textarea" ? (
        <textarea
          {...props}
          className={` text-[16px] focus:outline-none focus:border-none focus:ring-1 focus:ring-[var(--main-color)] border-none w-full p-2 bg-[rgba(245,245,245)] rounded-sm  ${moreStyle}`}
          required
          placeholder={label}
          name={name}
          rows={5}
        />
      ) : type === "file" ? (
        <div className="relative">
          <input
            {...props}
            className="hidden focus:outline-none focus:border-none focus:ring-1 focus:ring-[var(--main-color)]"
            id={name}
            name={name}
            type={type}
            required
          />
          <label
            htmlFor={name}
            className="text-[16px] focus:outline-none focus:border-none focus:ring-1 focus:ring-[var(--main-color)] bg-[rgba(252,186,3)] hover:bg-[rgba(252,186,3,0.8)] text-white py-2 px-4 rounded-sm cursor-pointer inline-block"
          >
            Choose File
          </label>
        </div>
      ) : (
        <input
          {...props}
          className={`focus:outline-none focus:border-none focus:ring-1 focus:ring-[var(--main-color)] ${
            type === "file" ? "" : "bg-[rgba(245,245,245)] "
          } w-full p-2 rounded-sm  ${moreStyle}`}
          required
          placeholder={label}
          name={name}
          type={type}
        />
      )}
    </p>
  );
}
