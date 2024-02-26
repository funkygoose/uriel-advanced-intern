'use client'
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";


export default function BookPill() {

  const dispatch = useDispatch()
  const user = useSelector(state => state.user);

  return (
    <div className="flex justify-end w-[100%]">
        <button className="bg-sky-900 px-3 p-[2px] rounded-xl text-xs text-white "> Premium</button>
    </div>
  );
}