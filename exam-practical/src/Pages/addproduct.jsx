import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { addProduct } from '../Redux/productSlice'; 


export default function AddProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false); 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
 
    const newProduct = {
      ...formData,
      price: Number(formData.price),
  
      id: Date.now(), 
    };
    
    
    dispatch(addProduct(newProduct))
     
      .then(() => {
        alert('Product added successfully!');
      
        navigate('/'); 
      })
      .catch((error) => {
        alert(`Failed to add product: ${error.message || 'Unknown error'}`);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="add-product-container p-4" style={{ maxWidth: '600px', margin: 'auto' }}>
      <Card>
        <Card.Body>
          <Card.Title className="text-center mb-4">Add New Product</Card.Title>
          <Form onSubmit={handleSubmit}>
            
            
            <Form.Group className="mb-3" controlId="formProductTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Price Input */}
            <Form.Group className="mb-3" controlId="formProductPrice">
              <Form.Label>Price ($)</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0.01"
                step="0.01"
                required
              />
            </Form.Group>

            {/* Submission Button */}
            <Button 
              variant="success" 
              type="submit" 
              className="w-100 mt-3" 
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? 'Adding...' : 'Save Product'}
            </Button>
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}