import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

type props = {
  product: Product;
};

export default function ProductCard({ product }: props) {
  return (
    <Card
      elevation={3}
      sx={{
       height: "200",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 220,

      }}
    >
      <CardMedia
        sx={{
          height: 240,
          backgroundSize: "cover",
        }}
        image={product.pictureUrl}
        title={product.name}
      />

      <CardContent>
        <Typography
          gutterBottom
          sx={{ textTransform: "uppercase" }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button>Add To Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`}>View</Button>
      </CardActions>
    </Card>
  );
}
