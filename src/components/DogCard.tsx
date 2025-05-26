// src/components/DogCard.tsx
import { Card, CardMedia } from "@mui/material";

interface Props {
  img: string;
}
export default function DogCard({ img }: Props) {
  return (
    <Card sx={{ height: 230, display: "flex" }}>
      <CardMedia
        component="img"
        image={img}
        alt="Dog"
        sx={{ width: "100%", objectFit: "cover" }}
      />
    </Card>
  );
}
