import Link from "next/link";

const AppRouter = () => {
	return (
		<>
			<div>
				<div className="flex flex-row justify-between text-center text-lime-600 no-underline">
					<ul>
						<li className="list-none">
							<Link className="no-underline text-red-500" href="/home"> Home </Link>
						</li>
						<li>
							<Link className="no-underline" href="/jobs"> Jobs </Link>
						</li>
						<li>
							<Link className="no-underline" href="/login"> Login </Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link className="no-underline" href="/register"> Register </Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default AppRouter;
