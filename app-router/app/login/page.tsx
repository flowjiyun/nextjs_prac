import LoginBtn from "@/components/login-btn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Login',
}

export default async function Login() {
  const res = await fetch('http://localhost:3000/login/api', {next: {revalidate: 1}});
  return (
    <>
      <h1>Login</h1>
      <LoginBtn />
    </>
  );
}