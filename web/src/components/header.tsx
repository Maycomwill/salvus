import NewProduct from "./new-product-dialog";

function Header() {
  return (
    <div className="flex-1/2 flex flex-col items-center gap-2">
      <h1 className="text-4xl font-bold tracking-widest">Product API</h1>
      <NewProduct />
    </div>
  );
}

export default Header;
