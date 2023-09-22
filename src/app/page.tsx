'use client';
import {signOut, useSession} from 'next-auth/react'
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  return (
    <main className="flex w-full h-full justify-center items-center content-center">
      <div className="bg-white p-5 rounded-lg">
        <h1>Meu Shape Minha Vida</h1>
        <div>{session?.data?.user?.email}</div>
        <button className="bg-slate-800 p-2 rounded-lg text-white" onClick={() => signOut()}>Logout</button>
      </div>
    </main>
  );
}

Home.requireAuth = true
