import { useEffect, useState } from "react";
import Header from "../Header";
import Input from "../Input";
import TodoList from "../TodoList";
import Footer from "../Footer";
// impoort uuid
import { v4 as uuidv4 } from "uuid";

function Home({ todoItems, setTodoItems }) {
  // functions
  const onAddItem = (item) => {
    setTodoItems([
      {
        id: uuidv4(),
        title: item.title,
        details: item.details,
        statusIsOn: true,
        isImportant: false,
      },
      ...todoItems,
    ]);
  };

  const onRemoveItem = (id) => {
    console.log("remove item", { id });
    const upDatedListAfterRemoval = todoItems.filter((i) => {
      return id !== i.id;
    });

    setTodoItems(upDatedListAfterRemoval);
  };

  //   status change function
  const onItemStatChange = (id) => {
    const upDatedItemStat = todoItems.map((i) => {
      const { statusIsOn } = i;
      if (i.id === id) {
        return { ...i, statusIsOn: !statusIsOn };
      } else {
        return { ...i };
      }
    });
    setTodoItems(upDatedItemStat);
  };
  // Mark as important
  const onImportantMark = (id) => {
    const upDatedStat = todoItems.map((i) => {
      const { isImportant } = i;
      if (i.id === id) {
        return { ...i, isImportant: !isImportant };
      } else {
        return { ...i };
      }
    });
    setTodoItems(upDatedStat);
  };

  return (
    <div className="relative pb-[200px] min-h-screen">
      <Input onAddItem={onAddItem} />
      {todoItems?.length && (
        <TodoList
          todoItems={todoItems}
          onRemoveItem={onRemoveItem}
          setTodoItems={setTodoItems}
          onItemStatChange={onItemStatChange}
          onImportantMark={onImportantMark}
        />
      )}
    </div>
  );
}

export default Home;
