import Footer from "./components/footer";
import Header from "./components/header";
import ProductTable from "./components/product-table";
function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-start pt-4 md:pt-12 gap-2">
      <Header />
      <main className="w-full flex items-start justify-center flex-1">
        <ProductTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
