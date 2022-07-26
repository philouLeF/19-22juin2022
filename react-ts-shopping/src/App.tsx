import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
// Components
import Item from "./Item/Item";
import { Drawer } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import Badge from "@material-ui/core";
// Styles
import { Wrapper } from "./App.styles";
// Types
export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}


const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery(
    ['product'],
    getProducts
  );

  console.log(data);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveToCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Someting went wrong...</div>

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
