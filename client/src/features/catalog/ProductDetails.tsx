import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/product";
import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid size={6}>
        <img
          src={product?.pictureUrl}
          alt={product?.name}
          style={{ width: "100%" }}
        />
        "
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <TableContainer>
          <Table>
            <TableBody>Table goes here</TableBody>
          </Table>
        </TableContainer>
        <Grid container spacing={2} marginTop={3}>
          <Grid size={6}>
            <TextField

            
             />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
