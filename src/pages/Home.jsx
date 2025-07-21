import React from "react";
import NavBar from "../components/NavBar";
import MainPage from "../components/MainPage";

export default function Home() {
    return(
        <>
            <div className="h-full w-full bg-black">

                <NavBar/>
                <MainPage/>

            </div>
        </>
    )
}