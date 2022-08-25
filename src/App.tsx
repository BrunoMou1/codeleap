import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";

import { store } from "./redux/index";

import { queryClient } from "./services/queryClient";
import { Home } from "./pages/home";
import { Signup } from "./pages/signup";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
