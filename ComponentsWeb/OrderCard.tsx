import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, TextInput } from "react-native";

interface OrderCardProps {
  orderName: string;
  orderId: string;
  amount: string;
  paymentType: string;
  deliveredTo: string;
  deliveryAddress: string;
  orderedOn: string;
  deliveredOn?: string;
  expectedDelivery?: string;
  cancelledOn?: string;
  status: "delivered" | "inprogress" | "returned" | "cancelled";
  imageSource: any;
  onPress?: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  orderName,
  orderId,
  amount,
  paymentType,
  deliveredTo,
  deliveryAddress,
  orderedOn,
  deliveredOn,
  expectedDelivery,
  cancelledOn,
  status,
  imageSource,
  onPress,
}) => {
  const [isRatingModalVisible, setIsRatingModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  const [comment, setComment] = useState("");
  const getStatusColor = () => {
    switch (status) {
      case "delivered":
        return "#4CAF50"; // Green
      case "inprogress":
        return "#FF9800"; // Orange
      case "cancelled":
        return "#F44336"; // Red
      case "returned":
        return "#9E9E9E"; // Gray
      default:
        return "#919191";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "inprogress":
        return "In Progress";
      case "returned":
        return "Returned";
      case "cancelled":
        return "Cancelled";
      default:
        return "Delivered";
    }
  };

  const getBackgroundColor = () => {
    switch (status) {
      case "delivered":
        return "#E8F5E8"; // Light green
      case "inprogress":
        return "#FFF3E0"; // Light orange
      case "cancelled":
        return "#FFEBEE"; // Light red
      case "returned":
        return "#F1F1F1"; // Light gray
      default:
        return "#f0f0f0"; // Default light gray
    }
  };

  const handleRatePress = () => {
    setIsRatingModalVisible(true);
  };

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleRatingSubmit = () => {
    console.log(`Rating submitted: ${selectedRating} stars for order ${orderId}`);
    console.log(`Comment: ${comment}`);
    setIsRatingModalVisible(false);
    setSelectedRating(0);
    setComment("");
  };

  const handleModalClose = () => {
    setIsRatingModalVisible(false);
    setSelectedRating(0);
    setComment("");
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleRatingSelect(i)}
          style={styles.starButton}
        >
          <Text style={[styles.starText, { color: i <= selectedRating ? '#FFD700' : '#DDD' }]}>
            ★
          </Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity
      style={[
        styles.ordersContainer,
        { backgroundColor: getBackgroundColor() },
      ]}
      onPress={onPress}
    >
      <View style={styles.orderImageContainer}>
        <Image source={imageSource} style={styles.orderImage} />
      </View>
      <View style={styles.orderDetailsContainer}>
        <View style={styles.orderTopRow}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Product Name: {orderName}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Order ID: {orderId}</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {amount} <Text style={{ fontWeight: "normal", fontSize: 14 }}>{`(${paymentType})`}</Text>
          </Text>
        </View>
        <View style={styles.orderBottomRow}>
          <View style={{...styles.detailColumn, width: "15%"}}>
            <Text style={styles.orderText}>Delivered To:</Text>
            <Text style={styles.detailText}>{deliveredTo}</Text>
          </View>
          <View style={{...styles.detailColumn, width: "35%"}}>
            <Text style={styles.orderText}>Delivery Address:</Text>
            <Text style={styles.detailText}>{deliveryAddress}</Text>
          </View>
          <View style={{...styles.detailColumn, width: "12%"}}>
            <Text style={styles.orderText}>Ordered On:</Text>
            <Text style={styles.detailText}>{orderedOn}</Text>
          </View>
          <View style={{...styles.detailColumn, width: "12%"}}>
            <Text style={styles.orderText}>
              {status === "inprogress" 
                ? "Expected Delivery:" 
                : status === "cancelled" 
                  ? "Cancelled On:" 
                  : "Delivered On:"}
            </Text>
            <Text style={styles.detailText}>
              {status === "inprogress" 
                ? expectedDelivery 
                : status === "cancelled" 
                  ? cancelledOn 
                  : deliveredOn}
            </Text>
          </View>
          <View style={{...styles.detailColumn, width: "10%"}}>
            <Text
              style={{... styles.statusText,  marginLeft: 20, color: getStatusColor(),  }}
            >
              {getStatusText()}
            </Text>
          </View>
          <View style={{...styles.detailColumn, width: "10%", marginLeft: 75 }}>
            <TouchableOpacity 
              style={styles.rateButton}
              onPress={handleRatePress}
            >
              <Text style={styles.rateButtonText}>Rate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Rating Modal */}
      <Modal
        visible={isRatingModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleModalClose}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleModalClose}
        >
          <TouchableOpacity 
            style={styles.modalContent}
            activeOpacity={1}
            onPress={() => {}} // Prevent closing when tapping inside modal
          >
            <Text style={styles.modalTitle}>Rate this Order</Text>
            <Text style={styles.modalSubtitle}>{orderName}</Text>
            <Text style={styles.modalOrderId}>Order ID: {orderId}</Text>
            
            <View style={styles.starsContainer}>
              {renderStars()}
            </View>
            
            <Text style={styles.ratingText}>
              {selectedRating > 0 ? `${selectedRating} star${selectedRating > 1 ? 's' : ''}` : 'Select a rating'}
            </Text>

            <TextInput
              style={styles.commentInput}
              placeholder="Add a comment (optional)"
              value={comment}
              onChangeText={setComment}
              multiline={true}
              numberOfLines={3}
              maxLength={200}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={styles.cancelButton}
                onPress={handleModalClose}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.submitButton, { opacity: selectedRating > 0 ? 1 : 0.5 }]}
                onPress={handleRatingSubmit}
                disabled={selectedRating === 0}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ordersContainer: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  orderImageContainer: {
    width: "10%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  orderImage: {
    width: 150,
    height: 70,
    borderRadius: 10,
  },
  orderDetailsContainer: {
    width: "88%",
    height: 70,
    flexDirection: "column",
  },
  orderTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "30%",
    width: "100%",
    marginBottom: 10,
  },
  orderText: {
    fontSize: 16,
    fontWeight: "600",
  },
  orderBottomRow: {
    height: "65%",
    width: "100%",
    flexDirection: "row",
  },
  detailColumn: {
    height: "100%",
    justifyContent: "center",
  },
  detailText: {
    fontSize: 14,
    marginTop: 2,
  },
  statusText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rateButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rateButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 25,
    alignItems: "center",
    minWidth: 300,
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  modalSubtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
  modalOrderId: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  starButton: {
    padding: 5,
  },
  starText: {
    fontSize: 30,
  },
  ratingText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  commentInput: {
    width: "100%",
    height: 80,
    borderWidth: 1,
    borderColor: "#e9ecef",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: "#333",
    backgroundColor: "#f8f9fa",
    textAlignVertical: "top",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 15,
  },
  cancelButton: {
    backgroundColor: "#f8f9fa",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dee2e6",
  },
  cancelButtonText: {
    color: "#6c757d",
    fontSize: 16,
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default OrderCard;
