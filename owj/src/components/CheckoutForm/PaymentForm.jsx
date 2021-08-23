import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ checkoutToken, backStep }) => {
    return (
        <div>
           <Review checkoutToken={checkoutToken} /> 
           <Divider />
           <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
           <Elements stripe={stripePromise} style={{ width: '30em' }}>
               {({ elements, stripe }) =>(
                   <form>
                    <CardElement />
                    <br /> <br />
                    <div style={{ display: 'inline', justifyContent: 'space-between' }}>
                        <Button variant="outlined" onClick={backStep}>Back</Button>
                        <Button variant="contained" type="submit" disabled={!stripe} color="primary">
                            Pay { checkoutToken.live.subtotal.formatted_with_symbol }
                        </Button>
                    </div>
                   </form>
               )}
           </Elements>
        </div>
    )
}

export default PaymentForm
