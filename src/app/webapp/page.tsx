import CallHandler from "@/app/webapp/callHandler";
import React from "react";
import CommonLayout from "@/component/commonLayout";

type elemArrayType = {
    elem: string;
    style: string;
    methodName: string;
    methodObject: { userId: string, price: number, isNowUse: boolean, from: number };
}[];

const elementArray: elemArrayType = [
    {
        style: "bg-red-200",
        elem: "미세한 진동!",
        methodName: "inAppReview",
        methodObject: {userId: "2212011230309008", price: 120, isNowUse: true, from: 2}
    },
    {
        style: "bg-red-300",
        elem: "강한 진동!",
        methodName: "buyPoint",
        methodObject: {userId: "2212011230309008", price: 400, isNowUse: true, from: 2}
    },
    {
        style: "bg-red-400",
        elem: "약한 진동!",
        methodName: "buyPoint",
        methodObject: {userId: "2212011230309008", price: 800, isNowUse: true, from: 2}
    }
];

const webApp = () => {
    return (
        <CommonLayout>
            <CallHandler elementArray={elementArray}/>
        </CommonLayout>
    );
};

export default webApp;
