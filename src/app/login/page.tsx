"use client"
import LoginForm from "@/components/LoginForm/loginForm";
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
   
    }

    return (
        <div className="relative min-h-screen w-full flex justify-center bg-[url('/images/login/bg.jpg')] bg-cover bg-center">
            <div className="font-sans flex flex-col justify-center max-w-[1200px] min-h-screen p-2 pb-20 gap-16 sm:p-20">
                <div className="flex bg-gray-200 rounded-2xl min-h-[600px] overflow-hidden">
                    <div className="min-w-[450px] p-12 flex flex-col justify-center">
                        <img src={"/alexrestaurantlogo.png"} className="max-w-[125px] rounded-2xl"></img>
                        <h3 className="py-4 font-semibold">Log in</h3>
                        <h5 className="text-gray-600">Start ordering the best food Sweden has to offer</h5>
                        <LoginForm />
                    </div>

                    <div className="relative">
                        <span className="absolute w-full h-full bg-gray-600 opacity-30"></span>
                        <img src={"/images/login/recipe1.jpg"} className="object-cover h-full"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;