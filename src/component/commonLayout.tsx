"use client";

import React from "react";
import tw from "tailwind-styled-components";
import NavigationBar from "@/component/nav/navigationBar";
import MainDescriptionLayout from "@/component/main/mainDescriptionLayout";

export default function CommonLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <BackgroundDiv>
            <NavigationBar/>
            {children}
            <MainDescriptionLayout/>
        </BackgroundDiv>
    );
}

const BackgroundDiv = tw.div`
  w-screen
  h-screen
  bg-black-navy
`;
