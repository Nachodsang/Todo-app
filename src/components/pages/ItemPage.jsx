import React, { useEffect, useState } from "react";
// import useparams
import { Link, useParams } from "react-router-dom";
// import form
import Form from "../Form";

const ItemPage = ({ todoItems, setTodoItems }) => {
  const { id: idP } = useParams();
  //   itemState
  const [item, setItem] = useState({});
  //   //   deconstruct item
  const { title, details, statusIsOn, isImportant, info, date } = item;
  // form submit function
  const onSubmit = (data) => {
    updateItem(idP, data.date, data.info);
    console.log(idP);
  };
  //   search Item function
  const itemIdentifier = (idFromURL) => {
    const itemShown = todoItems.find((i) => {
      return i.id === idFromURL;
    });

    setItem(itemShown);
  };
  //   //   updateItem
  const updateItem = (id, date, info) => {
    const updatedList = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, date: date, info: info };
      } else {
        return item;
      }
    });

    setTodoItems(updatedList);
  };
  useEffect(() => {
    itemIdentifier(idP);
  }, [todoItems]);

  return (
    <div>
      {/* container */}
      <div className="w-full min-h-screen relative pb-[100px]  flex justify-center items-center">
        <div className="bg-gradient-to-br from-[#6EE2F5]/50 to-[#6454F0] w-full h-full md:w-[800px] md:h-[500px] mx-auto p-4 md:p-14 rounded-3xl">
          <div className="flex h-full flex-col md:flex-row justify-center items-center">
            {/* content section */}
            <Form onSubmit={onSubmit} />

            {/* input section */}
            <div className="bg-white rounded-xl w-full md:w-[60%] md:h-full p-4 flex flex-col justify-between items-center">
              <div className="flex flex-col w-full md:h-full ">
                <div className="flex items-center justify-between w-full">
                  <div className="font-bold text-xl text-gray-700">{title}</div>
                  <div className="font-bold text-sm text-gray-700">{date}</div>
                </div>
                <div className="flex-col mt-4 flex items-start w-full  md:h-full  ">
                  <div className="font-bold text-md text-gray-700 italic">
                    {details}
                  </div>
                  <div className="md:h-full md:min-h-0 min-h-[16rem] break-words w-full text-gray-700 font-normal ">
                    {info}
                  </div>
                </div>
              </div>
              <div className="flex justify-end  w-full">
                <Link
                  className="bg-gray-300/80 px-4 py-2 rounded-lg hover:scale-105 transition-all text-gray-700"
                  to="/"
                >
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
