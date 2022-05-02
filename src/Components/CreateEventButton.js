import React from "react";
//import plusImg from "../assets/plus.svg";
export default function CreateEventButton() {
    return (
        <button
            className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl">
            <span className="">
                <i class="fa fa-plus" aria-hidden="true" style={{fontSize:20}} ></i>
            </span>
            {/* <img src={plusImg} alt="create_event" className="w-7 h-7" /> */}
            <span className="pl-3 pr-7"> Crear</span>
        </button>
    );
}