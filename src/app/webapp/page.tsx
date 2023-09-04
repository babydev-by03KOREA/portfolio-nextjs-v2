import CallHandler from "@/app/webapp/callHandler";
import React from "react";
import CommonLayout from "@/component/commonLayout";

type elemArrayType = {
    elem: string;
    style: string;
    function: string;
}[];

const elementArray: elemArrayType = [
    {
        style: "bg-red-200",
        elem: "미세한 진동!",
        function: "vibrateOne"
    },
    {
        style: "bg-red-300",
        elem: "강한 진동!",
        function: "vibrateTwo"
    },
    {
        style: "bg-red-400",
        elem: "약한 진동!",
        function: "vibrateThree"
    }
];

const webApp = ({children}: {
    children: React.ReactNode,
}) => {
    return (
        <CommonLayout>
            <CallHandler elementArray={elementArray}/>
        </CommonLayout>
    );
};

export default webApp;
