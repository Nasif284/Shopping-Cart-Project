import mongoose from "mongoose";
const ordersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
    orderId: {
      type: String,
      required: [true, "provide order Id"],
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
    },
    product_details: {
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: "",
    },
    payment_status: {
      type: String,
      default: "",
    },
    delivery_address: {
      type: mongoose.Schema.ObjectId,
      ref: "address",
    },
    subTotalAmt: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    invoice_receipt: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
const orderModel = mongoose.model("orders", ordersSchema);
export default orderModel;
