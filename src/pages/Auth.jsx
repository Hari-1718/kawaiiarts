import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconArrowLeft,
} from "@tabler/icons-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        let result;
        if (isLogin) {
            result = await login(email, password);
        } else {
            result = await register(name, email, password);
        }

        if (result.success) {
            navigate('/ecommerce');
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setError("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="shadow-input w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black relative">
                    <button
                        onClick={() => navigate('/')}
                        className="absolute top-4 left-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                        title="Back to Home"
                    >
                        <IconArrowLeft className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
                    </button>

                    <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center mt-6">
                        {isLogin ? "Welcome Back to KawaiiArts" : "Welcome to KawaiiArts"}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 text-center">
                        {isLogin
                            ? "Login to access your account"
                            : "Sign up to start shopping"}
                    </p>

                    {error && (
                        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                            {error}
                        </div>
                    )}

                    <form className="my-8" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                                <LabelInputContainer>
                                    <Label htmlFor="firstname">Full name</Label>
                                    <Input
                                        id="firstname"
                                        placeholder="Full Name"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </LabelInputContainer>
                            </div>
                        )}

                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                placeholder="name@example.com"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-8">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                placeholder="••••••••"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </LabelInputContainer>

                        <button
                            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] disabled:opacity-70 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : (isLogin ? "Sign In →" : "Sign up →")}
                            <BottomGradient />
                        </button>

                        <div className="mt-4 text-center">
                            <button
                                type="button"
                                onClick={toggleMode}
                                className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 underline bg-transparent border-none cursor-pointer"
                            >
                                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                            </button>
                        </div>

                        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                        <div className="flex flex-col space-y-4">
                            <button
                                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                                type="button"
                                onClick={() => console.log('GitHub login')}
                            >
                                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                    GitHub
                                </span>
                                <BottomGradient />
                            </button>
                            <button
                                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                                type="button"
                                onClick={() => console.log('Google login')}
                            >
                                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                                    Google
                                </span>
                                <BottomGradient />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
