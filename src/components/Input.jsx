import React, { useState } from "react";

const initialItem = { title: "", details: "" };
const Input = ({ onAddItem }) => {
  const [curItem, setCurItem] = useState(initialItem);

  //   current item function
  const targetItem = (e) => {
    setCurItem({ ...curItem, title: e.target.value });
  };

  const onAddButtonClick = () => {
    if (curItem.title && curItem.details) {
      onAddItem(curItem);
      setCurItem(initialItem);
    }
  };

  return (
    <div className="relative top-[20px]  w-full">
      <div className="max-w-[1040px] px-6 mx-auto flex justify-center">
        <div className="flex flex-col items-center gap-4  w-[400px]">
          {/* title */}
          <div className="text-5xl font-bold text-gray-100 ">
            What do you need to do this week?
          </div>
          {/* input */}
          <input
            type="text"
            placeholder="eg. apply for a new job ..."
            className="text-center rounded-md w-full border border-blue-200 outline-none shadow-md"
            onChange={targetItem}
            value={curItem.title}
          />
          <textarea
            className="w-full text-center rounded-md border border-blue-200 outline-none shadow-md"
            placeholder="Quick Details"
            rows="3"
            onChange={(e) =>
              setCurItem({ ...curItem, details: e.target.value })
            }
            value={curItem.details}
          />
          <button
            className="border px-8 py-2 rounded-md  bg-gradient-to-br from-[#6EE2F5] to-[#6454F0]  text-gray-100 font-bold hover:scale-105 transition-all border-blue-200  shadow-md"
            onClick={onAddButtonClick}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
