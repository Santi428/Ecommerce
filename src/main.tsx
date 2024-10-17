import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { CartProvider } from "./context/CartProvider";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
	<QueryClientProvider client={queryClient}>
		<CartProvider>
			<Layout /> 
		</CartProvider>
	</QueryClientProvider>
	</BrowserRouter>
)
