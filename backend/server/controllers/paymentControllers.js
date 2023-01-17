import dotenv from "dotenv";
dotenv.config();
import asyncHandler from "express-async-handler";
import Order from "../model/orderModel.js";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = asyncHandler(async (req, res) => {
  const order = await Order.findById({ _id: req.params.orderId }).populate(
    "productInfo buyerInfo"
  );

  const amount = parseFloat(order.amount) * 100;
  const orderInfo = {
    orderId: order._id,
  };

  const customer = await stripe.customers.create({
    email: order?.buyerInfo?.userEmail,
    metadata: {
      orderInfo: JSON.stringify(orderInfo),
    },
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
    ],

    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: order?.productInfo?.name,
            images: [order?.productInfo?.coverPhoto],
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    customer: customer.id,
    mode: "payment",
    success_url: `${process.env.CLIENT_SIDE}/success?orderId=${order._id}`,
    cancel_url: `${process.env.CLIENT_SIDE}/dashboard`,
  });

  res.status(200).json(session.url);
});

export const paymentSuccess = asyncHandler(async (req, res) => {
  const { token } = req.query;
  const order = await Order.findByIdAndUpdate(token, {
    isPaid: true,
  });
  res.status(200).json({ message: "Order Update" });
});
