import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createNewProduct } from "../../redux/features/product/productService";
import { useDispatch, useSelector } from "react-redux";
import ErrorMsg from "../../components/ErrorMsg";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.authReducers);
  const { success, loading, error } = useSelector((state) => state.products);

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleImg = (e) => {
    const selectedImg = e.target.files[0];
    previewImage(selectedImg);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createNewProduct({
        name: productName,
        description,
        coverPhoto: image,
        newPrice: price,
        category: category,
        lastDate: endTime,
        sellerInfo: user?._id,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate("/products");
    }
  }, [success, navigate]);

  return (
    <div className="p-10 bg-white rounded">
      {error && (
        <div className="my-3">
          <ErrorMsg error={error} />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-3"
      >
        <div className="lg:col-span-3 w-full">
          <label htmlFor="name" className="mb-2 text-sm text-gray-400 block">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full py-3 px-5 border rounded focus:outline-none placeholder:text-sm placeholder:text-gray-300 bg-gray-100"
            placeholder="Rolex Brand Watch etc."
          />
        </div>
        <div className="lg:col-span-3  w-full grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="lg:col-span-1 w-full">
            <label htmlFor="price" className="mb-2 text-sm text-gray-400 block">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full py-3 px-5 border rounded focus:outline-none placeholder:text-sm placeholder:text-gray-300 bg-gray-100"
              placeholder="$3000"
            />
          </div>
          <div className="lg:col-span-1 w-full">
            <label
              htmlFor="countries"
              className="mb-2 text-sm text-gray-400 block"
            >
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              id="countries"
              className="w-full py-3 px-5 border rounded focus:outline-none placeholder:text-sm placeholder:text-gray-300 bg-gray-100"
            >
              <option value="car">Car</option>
              <option value="computer">Computer</option>
              <option value="electronics">Electronics</option>
              <option value="mobile">Mobile</option>
              <option value="properties">Properties</option>
            </select>
          </div>
          <div className="lg:col-span-1 w-full">
            <label htmlFor="time" className="mb-2 text-sm text-gray-400 block">
              End Time
            </label>
            <input
              type="datetime-local"
              id="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full py-3 px-5 border rounded focus:outline-none placeholder:text-sm placeholder:text-gray-300 bg-gray-100"
              placeholder="$3000"
            />
          </div>
        </div>

        <div className="lg:col-span-3 w-full  text-gray-100">
          <label htmlFor="files" className="mb-2 text-sm text-gray-400 block">
            Image
          </label>

          <input
            type="file"
            name="files"
            id="files"
            onChange={(e) => handleImg(e)}
            className="px-8 py-3 rounded w-full text-gray-400 bg-gray-100"
          />
        </div>
        <div className="lg:col-span-3 w-full">
          <label htmlFor="time" className="mb-2 text-sm text-gray-400 block">
            Description
          </label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
          />
        </div>
        <div className="lg:col-span-3 w-full">
          <button
            type="submit"
            disabled={loading}
            className="bg-gray-900 text-white py-3 w-full rounded text-sm"
          >
            {loading ? "Loading..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
