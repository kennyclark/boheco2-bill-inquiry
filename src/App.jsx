import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex place-content-center">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
