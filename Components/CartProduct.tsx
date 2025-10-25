import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

interface CartProductProps {
  productImage: any;
  productName: string;
  productBrand: string;
  productCategory: string;
  originalPrice: string;
  currentPrice: string;
  discountPercentage: string;
  offerEndsIn: string;
  quantity: number;
  onQuantityIncrease: () => void;
  onQuantityDecrease: () => void;
  onSaveForLater: () => void;
  onRemoveFromCart: () => void;
  onBuyNow: () => void;
  totalPrice: string;
}

const CartProduct: React.FC<CartProductProps> = ({
  productImage,
  productName,
  productBrand,
  productCategory,
  originalPrice,
  currentPrice,
  discountPercentage,
  offerEndsIn,
  quantity,
  onQuantityIncrease,
  onQuantityDecrease,
  onSaveForLater,
  onRemoveFromCart,
  onBuyNow,
  totalPrice,
}) => {
  return (
    <View style={styles.cartItemContainer}>
      {/* Left: Product Image - Full Height */}
      <Image source={productImage} style={styles.productImage} />

      {/* Right: Content Area */}
      <View style={styles.contentWrapper}>
        {/* Row 1: Product Name */}
        <Text style={styles.productName}>{productName}</Text>

        {/* Row 2: Three Columns */}
        <View style={styles.row2}>
          {/* Column 1: Brand & Category */}
          <View style={styles.col1}>
            <Text style={styles.brandText}>{productBrand}</Text>
            <Text style={styles.categoryText}>{productCategory}</Text>
          </View>

          {/* Column 2: Price & Offer */}
          <View style={styles.col2}>
            <View style={styles.priceRow}>
              <Text style={styles.originalPrice}>{originalPrice}</Text>
              <Text style={styles.currentPrice}>{currentPrice}</Text>
              <View style={styles.discountBadge}>
                <Text style={styles.discountText}>{discountPercentage}</Text>
              </View>
            </View>
            <Text style={styles.offerText}>Offer ends in {offerEndsIn}</Text>
          </View>

          {/* Column 3: Quantity Selector */}
          <View style={styles.col3}>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                onPress={onQuantityDecrease}
                style={styles.qtyBtn}
              >
                <Text style={styles.qtyBtnText}>−</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                onPress={onQuantityIncrease}
                style={styles.qtyBtn}
              >
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Row 3: Buttons and Total */}
        <View style={styles.row3}>
          {/* Buttons Section - Takes remaining width */}
          <View style={styles.buttonsSection}>
            <TouchableOpacity style={styles.saveBtn} onPress={onSaveForLater}>
              <Text style={styles.saveBtnText}>Save for Later</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeBtn} onPress={onRemoveFromCart}>
              <Text style={styles.removeBtnText}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyBtn} onPress={onBuyNow}>
              <Text style={styles.buyBtnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          {/* Total Section - Fixed width */}
          <View style={styles.totalSection}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>{totalPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginVertical: 8,
  },
  productImage: {
    width: 100,
    height: "100%",
    resizeMode: "cover",
  },
  contentWrapper: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  
  // Row 1
  productName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 12,
  },

  // Row 2
  row2: {
    flexDirection: "row",
    marginBottom: 12,
    gap: 12,
  },
  col1: {
    flex: 1,
  },
  brandText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
  },
  col2: {
    flex: 1,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#007bff",
    marginRight: 8,
  },
  discountBadge: {
    backgroundColor: "#28a745",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "600",
  },
  offerText: {
    fontSize: 12,
    color: "#ff6b6b",
  },
  col3: {
    flex: 1,
    alignItems: "flex-end",
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  qtyBtn: {
    backgroundColor: "#007bff",
    width: 32,
    height: 32,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  qtyBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    minWidth: 30,
    textAlign: "center",
  },

  // Row 3
  row3: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  buttonsSection: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },
  saveBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007bff",
  },
  removeBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#dc3545",
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  removeBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#dc3545",
  },
  buyBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#28a745",
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buyBtnText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#28a745",
  },
  totalSection: {
    // width: '27%',
    alignItems: "flex-end",
    minWidth: 80,
  },
  totalLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: "#007bff",
  },
});

export default CartProduct;