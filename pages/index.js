import React, { useContext } from "react";

import { Context } from "../context";



import { useRouter } from "next/router";

import axios from "axios";


export default function Auth() {
    const {
        username,

        secret,

        setUsername,

        setSecret,


    } = useContext(Context);

    const router = useRouter()

    function onSubmit(e) {
        e.preventDefault()
        if (username.length === 0 || secret.length === 0) return
        axios
            .put(
                'https://api.chatengine.io/users/', { username, secret }, { headers: { "private-key": "a98615b2-e988-487c-a6fd-eed1d50d00de" } }
            )
            .then((r) => router.push("/chats"));
    }
    return ( <
        div className = "background" >
        <
        div className = "auth-container" >
        <
        form className = "auth-form"
        onSubmit = {
            (e) => onSubmit(e) } >
        <
        div className = "auth-title" > NextJs Chat < /div>

        <
        div className = "input-container" >
        <
        input placeholder = "Email"
        className = "text-input"
        onChange = { e => setUsername(e.target.value) }
        />

        <
        /div>

        <
        div className = "input-container" >
        <
        input type = "password"
        placeholder = "password"
        className = "text-input"
        onChange = { e => setSecret(e.target.value) }
        />

        <
        /div>

        <
        button type = "submit"
        className = "submit-button" >
        Login / sign Up <
        /button>

        <
        /form>

        <
        /div>


        <
        /div>


    )

}