"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  return (
    <main className="flex w-full h-full justify-center items-center content-center">
      <div className="bg-white p-5 rounded-lg">
        <h1>Meu Shape Minha Vida</h1>
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
        <div>
          <p>Senha:</p>
          <input
            id="password"
            name="password"
            type="password"
            className="bg-slate-800 rounded-lg text-white p-2"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            className="text-left w-full"
            onClick={() => router.push("forgot-password")}
          >
            Esqueci minha senha
          </button>
        </div>
        <button
          className="bg-slate-800 p-2 rounded-lg text-white"
          onClick={() =>
            signIn("credentials", {
              email,
              password,
              redirect: true,
              callbackUrl: "/",
            })
          }
          disabled={!email || !password}
        >
          Entrar
        </button>
        <div />
        <button onClick={() => router.push("signup")}>Cadastrar</button>
      </div>
    </main>
  );
}
