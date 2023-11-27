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
        elem: "연락처 권한",
        methodName: "getContacts",
        methodObject: {userId: "2309011820579008", price: 120, isNowUse: true, from: 2}
    },
    {
        style: "bg-red-300",
        elem: "25 픽",
        methodName: "buyPoint",
        methodObject: {userId: "2309011820579008", price: 25, isNowUse: true, from: 2}
    },
    {
        style: "bg-red-400",
        elem: "125 픽",
        methodName: "buyPoint",
        methodObject: {userId: "2309011820579008", price: 125, isNowUse: true, from: 2}
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
