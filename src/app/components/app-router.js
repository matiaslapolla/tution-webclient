import Link from "next/link";

const AppRouter = () => {
	return (
		<>
			<div>
				<div className="">
					<ul>
						<li className="">
							<Link className="" href="/home">
								Home
							</Link>
						</li>
						<li>
							<Link className="" href="/jobs">
								Jobs
							</Link>
						</li>
						<li>
							<Link className="" href="/login">
								Login
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link className="" href="/register">
								Register
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AppRouter;
