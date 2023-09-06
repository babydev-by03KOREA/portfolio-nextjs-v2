"use client";

import React from "react";

type elemArrayType = {
    elem: string;
    style: string;
    methodName: string;
    methodObject: { userId: string, point: number, isNowUse: boolean };
}[];

export default function CallHandler({elementArray}: { elementArray: elemArrayType }) {
    return (
        <>
            {
                elementArray.map((elem, index) =>
                    <div key={index}
                         className={`w-full h-10 p-0 ${elem.style} w-full h-10 p-0 ${elem.style} flex justify-center items-center text-black`}
                         onClick={() => vibrate(elem.methodName, elem.methodObject)}>
                        <span style={{}}>
                            {elem.elem}
                        </span>
                    </div>
                )
            }
        </>
    );
}

const vibrate = (functionName: string, dataObject: object): void => {
    const myWindow = window as any;
    if (myWindow.flutter_inappwebview) {
        myWindow.flutter_inappwebview.callHandler(functionName, dataObject);
    } else {
        alert(`${JSON.stringify(dataObject)}`);
    }
};
