import { AutoImageSlider } from "@/components/AutoImageSlider/autoImageSlider";

const Login = () => {
    return (
        <div className="font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <p>Login page</p>
            <div className="flex bg-gray-200 rounded-2xl overflow-hidden p-4">
                <h1>Hej</h1>
                <h2>Hej</h2>
                <h3>Hej</h3>
                <h4>Hej</h4>
                <h5>Hej</h5>
                <p>Hej</p>
                <div className="min-w-[300px] p-4">
                    <p>Hej</p>
                </div>

                <div>
                    <img src={"/images/login/recipe1.jpg"}></img>
                </div>
            </div>
        </div>
    )
}

export default Login;