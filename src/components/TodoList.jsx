import React from "react";
import ImpItem from "./ImpItem";
import TodoItem from "./TodoItem";

const TodoList = ({
  todoItems,
  onRemoveItem,
  setTodoItems,
  onItemStatChange,
  onImportantMark,
}) => {
  return (
    <div className="relative top-[40px] w-full  bg-gradient-to-br from-[#6EE2F5]/50 to-[#6454F0] py-12 shadow-xl">
      <div className="max-w-[1040px] mx-auto px-6">
        <ImpItem todoItems={todoItems} />
        {todoItems?.map((item, index) => {
          return (
            <TodoItem
              item={item}
              onRemoveItem={onRemoveItem}
              setTodoItems={setTodoItems}
              todoItems={todoItems}
              key={item.id}
              onItemStatChange={onItemStatChange}
              onImportantMark={onImportantMark}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
