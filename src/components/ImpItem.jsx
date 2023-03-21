import React from "react";
import { Link } from "react-router-dom";

const ImpItem = ({ todoItems }) => {
  const importantList = todoItems.filter((i) => {
    return i.isImportant === true;
  });

  return (
    <div className="w-full pb-4 min-h-[80px] overflow-auto">
      {importantList.length ? (
        <div className="flex justify-center items-center gap-4">
          {importantList.map((item) => {
            return (
              <Link
                to={`/item/${item.id}`}
                className="border border-blue-300 bg-white px-4 py-2 rounded-full text-gray-800 font-semibold"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      ) : (
        todoItems.length > 0 && (
          <div>
            <h1 className="text-center font-bold text-2xl text-gray-100">
              Mark some task as important by Clicking the task title
            </h1>
          </div>
        )
      )}
    </div>
  );
};

export default ImpItem;
