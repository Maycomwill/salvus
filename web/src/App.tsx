import Footer from "./components/footer";
import Header from "./components/header";
import ProductTable from "./components/product-table";
function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-start gap-2 pt-4 md:pt-12">
      <Header />
      <main className="flex w-full flex-1 items-start justify-center">
        <ProductTable />
      </main>
      <Footer />
    </div>
  );
}

export default App;
