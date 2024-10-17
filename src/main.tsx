import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./context/CartProvider";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<CartProvider>
			<Layout /> 
		</CartProvider>
	</BrowserRouter>
)
