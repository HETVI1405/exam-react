
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack'; 

import { deleteproduct, fetchproduct, editproduct} from '../Redux/productSlice'; 
; 

const navigate = (path) => console.log(`Navigating to: ${addproduct}`);


export default function Products() {
  const dispatch = useDispatch();


  const { products } = useSelector((state) => state.products);
  const productArray = products || [];

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);


  const handleDelete = (id) => {
   
  
      dispatch(deleteproduct(id));
    
  };
  
  const handleEdit = (id) => {
    
    
  
    navigate(`/edit-product/${id}`); 

 
  };

  const handleAddProduct = () => {

    navigate("/add-product"); 

    
    
  };


  return (
    <div className="product-container">
      <Stack direction="horizontal" gap={3} className="mb-4 align-items-center justify-content-between">
        <h2 className="product-title m-0">Products</h2> 
        
      
        <Button 
          
          onClick={handleAddProduct}
        >
          + Add Product
        </Button>
      </Stack>

     
        <div className="product-grid">
          {productArray.map((product) => (
            <Card key={product.id} className="product-card">
              <Card.Body>
                <Card.Title className="product-title">
                  {product.title}
                </Card.Title>

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
                    onClick={() => handleEdit(product.id)}
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
    
    </div>
  );
}