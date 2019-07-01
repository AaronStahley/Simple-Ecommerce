import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import "../css/home.css";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/r/ef/refurb/iphoneX/refurb-iphoneX-silver_FMT_WHH?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1546626276301"
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="Product-Card-Actions">
        <Button size="small" color="primary">
          Buy Now
        </Button>
        <IconButton
          aria-label="Cart of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="primary"
          //   component={Link}
          //   to={user._id ? "/cart" : "/"}
        >
          <Badge color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </CardActions>
    </Card>
  );
}
