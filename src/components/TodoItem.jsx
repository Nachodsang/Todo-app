import React, { useState } from "react";
import { MdDone } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
import { ImBin, ImInfo } from "react-icons/im";
// import Link
import { Link } from "react-router-dom";

const TodoItem = ({
  item,
  onRemoveItem,
  onItemStatChange,
  onImportantMark,
}) => {
  const { title, details, statusIsOn, isImportant, id } = item;

  return (
    <div className="md:w-[600px] w-[300px] bg-white min-h-[50px] p-4 m-2 mx-auto rounded-lg shadow-lg relative">
      <div className="flex md:flex-row  flex-col md:justify-between md:items-center items-start">
        {/* info icon */}

        <div className="absolute top-3 right-4 md:left-2  ">
          <Link to={`/item/${id}`}>
            <ImInfo className="text-[#811D4D] hover:text-[#6890F2] transition-all" />
          </Link>
        </div>
        <div className="flex items-center justify-start md:ml-4 w-[95%] md:w-[50%] overflow-hidden">
          <div
            className={`${
              isImportant
                ? "font-bold text-green-800  "
                : "font-semibold text-gray-600"
            } cursor-pointer  h-10  text-2xl`}
            onClick={() => onImportantMark(id)}
          >
            {title}
          </div>
        </div>
        <div className="text-sm mt-[-6px] mb-3 md:mb-0 font-semibold text-gray-500">
          {details}
        </div>
        <div className=" w-full md:w-[20%] flex md:flex-col justify-between gap-6 md:gap-1 ">
          {/* status */}
          {statusIsOn ? (
            <div
              onClick={() => onItemStatChange(id)}
              className="font-bold text-md text-gray-600 cursor-pointer flex gap-1 items-center hover:scale-105 transition-all duration-500"
            >
              <FaArrowCircleRight />
              <span>on going</span>
            </div>
          ) : (
            <div
              className="text-[#6890F2] font-bold text-xl cursor-pointer flex items-center gap-1 transition-all hover:scale-105  duration-1000"
              onClick={() => onItemStatChange(id)}
            >
              <MdDone />
              <span>Done</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-[#7C2C52] font-bold cursor-pointer  transition-all hover:scale-90  duration-500">
            <ImBin />
            <h3 onClick={() => onRemoveItem(id)}>REMOVE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
