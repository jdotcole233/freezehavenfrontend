import { useEffect, useState } from "react";
import { DataTable } from "../UtilityComponent";
import { mockProducts } from "../../assets/data";
import { AddProduct } from ".";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const columnNames = [
  "Product Name",
  "Product Type",
  "Category",
  "Status",
  "Created By",
];

const Products = () => {
  const [addProductFrom, setAddProductForm] = useState(false);

  const [editProduct, setEditProduct] = useState({});
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const editRow = (row) => {
    setEditProduct(row);
    setAddProductForm(true);
    console.log("Editing row ", row);
  };

  const viewRow = (id) => {
    console.log(id);
    navigate(`/products/${id}`);
  };

  const fetchProducts = () => {
    let url = "http://127.0.0.1:8000/api/products";

    fetch(url)
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {
        toast.warn("Failed to load products");
      });
  };

  useEffect(() => {
    fetchProducts();
  }, [addProductFrom]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Product List</h1>
          <p className="text-sm font-thin">Manage your products</p>
        </div>

        <button
          onClick={() => setAddProductForm(true)}
          className="flex border px-4 py-2 bg-orange-400 rounded-md text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add New Product
        </button>
      </div>

      <DataTable
        rows={products}
        columnNames={columnNames}
        editRow={editRow}
        viewRow={viewRow}
      />

      {addProductFrom && (
        <AddProduct
          closeModal={setAddProductForm}
          editProduct={editProduct}
          setEditProduct={setEditProduct}
        />
      )}
    </div>
  );
};

export default Products;
