import SignInBtns from "@/components/SignInBtns";
import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const SignIn = async() => {

  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }


  return <SignInBtns />
};

export default SignIn;
