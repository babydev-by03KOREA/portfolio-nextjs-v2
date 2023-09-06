import CallHandler from "@/app/webapp/callHandler";
import React from "react";
import CommonLayout from "@/component/commonLayout";

type elemArrayType = {
    elem: string;
    style: string;
    methodName: string;
    methodObject: { userId: string, point: number, isNowUse: boolean };
}[];

const elementArray: elemArrayType = [
    {
        style: "bg-red-200",
        elem: "미세한 진동!",
        methodName: "buyPoint",
        methodObject: {userId: "2212011230309008", point: 120, isNowUse: true}
    },
    {
        style: "bg-red-300",
        elem: "강한 진동!",
        methodName: "buyPoint",
        methodObject: {userId: "2212011230309008", point: 400, isNowUse: true}
    },
    {
        style: "bg-red-400",
        elem: "약한 진동!",
        methodName: "buyPoint",
        methodObject: {userId: "2212011230309008", point: 800, isNowUse: true}
    }
];

const webApp = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <CommonLayout>
            <CallHandler elementArray={elementArray}/>
            {children}
        </CommonLayout>
    );
};

export default webApp;
