import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container mx-auto p-2">
          <Content />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
