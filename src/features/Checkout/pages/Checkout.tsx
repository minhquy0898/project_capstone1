import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import {
  CreateOrderData,
  CreateOrderActions,
  OnApproveData,
  OnApproveActions,
} from '@paypal/paypal-js/types/components/buttons';
import { useEffect, useState } from 'react';

import { PAYPAL_CLIENT_ID } from '../../../config/paypal.config';

function Checkout() {
  //   const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderID, setOrderID] = useState<string>('');

  // creates a paypal order
  const createOrder = (data: CreateOrderData, actions: CreateOrderActions) => {
    console.log('data', data);

    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Sunflower',
            amount: {
              currency_code: 'USD',
              value: String(0.01),
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data: OnApproveData, actions: OnApproveActions) => {
    return actions.order?.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  useEffect(() => {
    if (success) {
      alert('Payment successful!!');
      console.log('Order successful . Your order id is--', orderID);
    }
  }, [success]);

  return (
    <div>
      <PayPalScriptProvider
        options={{
          clientId: PAYPAL_CLIENT_ID,
          currency: 'USD',
          intent: 'capture',
        }}
      >
        <div>
          <PayPalButtons
            style={{ layout: 'vertical' }}
            createOrder={createOrder}
            onApprove={onApprove as unknown as any}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}

export default Checkout;
