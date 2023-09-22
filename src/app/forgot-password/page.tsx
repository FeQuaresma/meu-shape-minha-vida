"use client";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase"; 

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  }

  return (
    <main className="flex w-full h-full justify-center items-center content-center">
      <div className="bg-white p-5 rounded-lg">
        <h1>Esqueci minha senha</h1>
        <div>
          <p>Email:</p>
          <input
            id="email"
            name="email"
            type="email"
            className="bg-slate-800 rounded-lg text-white p-2"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-slate-800 p-2 rounded-lg text-white"
          onClick={() => resetEmail()}
          disabled={!email}
        >
          Enviar
        </button>
      </div>
    </main>
  );
}
