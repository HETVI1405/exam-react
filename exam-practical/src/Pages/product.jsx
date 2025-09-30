
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { deleteproduct, fetchproduct, editproduct, addproduct } from "../Redux/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const productArray = products || [];

  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    title: "",
    category: "",
    price: "",
  });

  const [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteproduct(id));
  };

  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowEditModal(true);
  };

  const handleChangeEdit = (e) => {
    setCurrentProduct({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(editproduct({ id: currentProduct.id, updatedData: currentProduct }));
    setShowEditModal(false);
  };

  const handleChangeAdd = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSave = () => {
    dispatch(addproduct(newProduct));
    setNewProduct({ title: "", category: "", price: "" });
    setShowAddModal(false);
  };

  return (
    <div className="product-container">
      <Stack
        direction="horizontal"
        gap={3}
        className="mb-4 align-items-center justify-content-between"
      >
        <h2 className="product-title m-0">Products</h2>

        <Button onClick={() => setShowAddModal(true)}>+ Add Product</Button>
      </Stack>

      <div className="product-grid">
        {productArray.map((product) => (
          <Card key={product.id} className="product-card">
            <Card.Body>
              <Card.Title className="product-title">{product.title}</Card.Title>

              <Card.Text className="product-info">
                <span>
                  <b>Category:</b> {product.category}
                </span>
                <br />
                <span>
                  <b>Price:</b> ${product.price}
                </span>
              </Card.Text>

              <Stack
                direction="horizontal"
                gap={2}
                className="justify-content-end mt-3"
              >
                <Button
                  variant="primary"
                  className="edit-btn"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </Button>

                <Button
                  variant="danger"
                  className="delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </Button>
              </Stack>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={currentProduct.title}
                onChange={handleChangeEdit}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={currentProduct.category}
                onChange={handleChangeEdit}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={currentProduct.price}
                onChange={handleChangeEdit}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newProduct.title}
                onChange={handleChangeAdd}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleChangeAdd}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleChangeAdd}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddSave}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
