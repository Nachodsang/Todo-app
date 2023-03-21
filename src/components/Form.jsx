import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //   watch to see selected input
  console.log(watch("date"), watch("info"));
  return (
    <form
      className=" md:w-[40%] w-full h-full md:p-4 flex flex-col justify-between items-center md:items-start my-2 md:my-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full">
        <h1 className="font-bold text-xl text-white">Date</h1>
        <input
          type="date"
          {...register("date", { required: true })}
          className="rounded-lg w-full"
        />
        <h1 className="font-semibold text-xl text-white">More info ...</h1>
        <textarea
          {...register("info", { required: true })}
          className="w-full h-[180px] rounded-lg"
        />
        {errors.date && (
          <p className="font-semibold text-md text-white">
            Date field is required
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-white/80 px-4 py-2 rounded-lg hover:scale-105 transition-all w-full text-gray-700"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
