import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				element={<Root />}
				path="/"
			>
				<Route
					element={<Home />}
					index
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export const Root = () => {
	return (
		<main
			className={`
					bg-bg text-white h-full`}
		>
			<div className="">
				<Header />
				<Outlet />
			</div>
			<Footer />
		</main>
	);
};

export default App;
