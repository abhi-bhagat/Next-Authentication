"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";
//types
type SignUpFormData = {
	userName: string;
	email: string;
	password: string;
};
//methods
const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
	e.preventDefault();
};
//

const Signup = () => {
	const [user, setUser] = useState<SignUpFormData>({
		userName: "",
		email: "",
		password: "",
	});
	return (
		<div className="  min-h-screen flex flex-col items-center justify-center">
			<h1>SignUp</h1>
			<div className="border-2 md:min-w-[560px] p-4">
				<form onSubmit={(e) => onSignUp(e)}>
					<div className="flex flex-col gap-2">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							className=" h-8 pl-2 text-black"
							placeholder="Enter your username"
							value={user.userName}
							onChange={(e) => setUser({ ...user, userName: e.target.value })}
						/>
					</div>

					<div className="flex flex-col gap-2 my-4">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							className=" h-8 pl-2 text-black"
							placeholder="Enter your Email"
							value={user.email}
							onChange={(e) => setUser({ ...user, email: e.target.value })}
						/>
					</div>
					<div className="flex flex-col gap-2 my-4">
						<label htmlFor="name">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							className=" h-8 pl-2 text-black"
							placeholder="Enter your password"
							value={user.password}
							onChange={(e) => setUser({ ...user, password: e.target.value })}
						/>
					</div>
					<div className="flex flex-col gap-2 my-4 mt-8">
						<button
							type="submit"
							className="border border-white h-10 rounded-md"
						>
							{" "}
							SignUp
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
