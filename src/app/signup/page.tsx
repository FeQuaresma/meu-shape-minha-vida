"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { signIn } from "next-auth/react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password);
    setTimeout(() => {
      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    }, 1000);
  };

  return (
    <main className="flex w-full h-full justify-center items-center content-center">
      <div className="bg-white p-5 rounded-lg">
        <h1>Cadastre-se</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <p>Email:</p>
          <input
            id="email"
            name="email"
            type="email"
            className="bg-slate-800 rounded-lg text-white p-2"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p>Digite sua senha:</p>
          <input
            id="password"
            name="password"
            type="password"
            className="bg-slate-800 rounded-lg text-white p-2"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p>Digite sua senha de novo:</p>
          <input
            id="passwordAgain"
            name="passwordAgain"
            type="password"
            className="bg-slate-800 rounded-lg text-white p-2"
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
          <div />
          <button
            className="bg-slate-800 p-2 rounded-lg text-white"
            type="submit"
            onClick={() => signUp()}
            disabled={
              !email ||
              !password ||
              !passwordAgain ||
              password !== passwordAgain
            }
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
