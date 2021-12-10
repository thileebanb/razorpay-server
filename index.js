const Razorpay = require('razorpay');
require('dotenv').config()

const instance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET
});

async function fetchPaymentDetails(paymentId) {
  const paymentDetails = await instance.payments.fetch(paymentId);
  console.log('paymentDetails', paymentDetails);
}

fetchPaymentDetails('your-payment-id');
