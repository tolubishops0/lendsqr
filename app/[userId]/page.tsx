"use client";
import React from "react";
import { useParams } from "next/navigation";

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  return <div>details page</div>;
};

export default UserDetails;
