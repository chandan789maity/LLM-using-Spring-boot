
import "./App.css";
import ChatPage from "./Pages/ChatPage/ChatPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/HomePage/components/Homepage";
function App() {
  return (
    <BrowserRouter>
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="chat/" element={<ChatPage />} />
		</Routes>
	</BrowserRouter>
      

   
  );
}

export default App;
