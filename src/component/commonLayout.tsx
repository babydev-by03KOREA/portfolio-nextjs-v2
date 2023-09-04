"use client";

import React from "react";
import tw from "tailwind-styled-components";
import NavigationBar from "@/component/nav/navigationBar";

export default function CommonLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <>
            <BackgroundDiv>
                <NavigationBar/>
                {children}
            </BackgroundDiv>
        </>
    );
}

const BackgroundDiv = tw.div`
  w-screen
  h-screen
  bg-black-navy
`;
