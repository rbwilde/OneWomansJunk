import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import Checkout from './Checkout/Checkout';

const Review = ({ checkoutToken }) => {
    return (
        <div>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: "10px 0"}} key={product.name}>
                        <ListItemText primary={product.name} secondary={<div>Quantity: {product.quantity}</div>}/>
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <listItem style={{padding: "10px 0"}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{fontweight: 700}}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>

                </listItem>
            </List>
        </div>
    )
}

export default Review
