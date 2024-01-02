import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";


export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div className='back-btn' onClick={() => navigate(-1)}>
      <MdOutlineArrowBackIos className='back-btn-icon' /> Back
    </div>

  )
}