import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setHideModal } from "../redux/reducers/openModalSlice";
import {addPost, setDetail, setTitle} from "../redux/reducers/createNewPost";

const NewPostModal = () => {
  const dispatch = useDispatch();
  const {title, detail} = useSelector((state) => state.addNewPost);
  const postData = {
    title,
    detail,
  };
  console.log("postData 👉️", postData);

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    console.log("firstName 👉️", title);
    console.log("lastName 👉️", detail);

    // 👇️ clear all input values in the form
    dispatch(addPost({ postData }));
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-1/3 mx-auto max-w-7xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            <h3 className="text-3xl font=semibold">Post Detail</h3>
            <button
              className="bg-transparent border-0 text-black float-right"
              onClick={() => dispatch(setHideModal())}
            >
              <span className="text-black opacity-7 h-7 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                x
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
              <label className="block text-black text-sm font-bold mb-1">
                Title
              </label>
              <input
                value={title}
                className="shadow appearance-none border rounded h-12 w-full py-2 px-1 text-black"
              />
              <label className="block text-black text-sm font-bold mb-1">
                Detail
              </label>
              <textarea
                value={detail}
                className="shadow appearance-none border rounded h-32 w-full py-2 px-1 text-black"
              />
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => dispatch(setHideModal())}
            >
              Close
            </button>
            <button
              className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPostModal;
