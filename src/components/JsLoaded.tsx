"use client";
import { useEffect } from "react";

export default function JsLoaded() {
    useEffect(() => {
        document.documentElement.classList.add("js-loaded");
    }, []);
    return null;
}
