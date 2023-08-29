"use client";
import React from "react";

export default function CommonLayout({children, className, functionName}: { children: React.ReactNode, className: string, functionName: string }) {
    return (
        <div className={`w-full h-10 p-0 ${className ? className : ""}`} onClick={() => vibrate(`${functionName}`)}>
            {children}
        </div>
    );
}

const vibrate = (functionName: string) => {
    const myWindow = window as any;
    if (myWindow.flutter_inappwebview) {
        myWindow.flutter_inappwebview.callHandler(`${functionName}`, "");
    } else {
        alert(`${functionName}`);
    }
};
