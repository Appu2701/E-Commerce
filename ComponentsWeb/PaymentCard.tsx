import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface PaymentCardProps {
  cardType: 'credit' | 'debit';
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  brand?: string; // Visa, Mastercard, etc.
  bankName?: string; // Bank name like "State Bank of India"
  primaryColor?: string; // bank primary color for card background
  onDelete?: () => void; // callback when user confirms deletion
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  cardType,
  cardNumber,
  cardHolderName,
  expiryDate,
  brand = 'Visa',
  bankName = 'Bank',
  primaryColor = '#1a1a1a',
  onDelete,
}) => {
  const [confirmVisible, setConfirmVisible] = useState(false);

  // choose bank color by bankName when possible
  const getBankColor = (name?: string, fallback?: string) => {
    if (!name) return fallback || '#1a1a1a';
    const n = name.toLowerCase();
    if (n.includes('sbi')) return '#00B5EF'; // SBI 
    if (n.includes('axis')) return '#891B3F'; // Axis
    if (n.includes('hdfc')) return '#004C8F'; // HDFC
    if (n.includes('icici')) return '#F99D27'; // ICICI 
    if (n.includes('kotak')) return '#ED1C24' // Kotak
    if (n.includes('indian')) return '#183883'// Indian
    return fallback || '#1a1a1a';
  };

  const bgColor = getBankColor(bankName, primaryColor);

  const openConfirm = () => setConfirmVisible(true);
  const closeConfirm = () => setConfirmVisible(false);

  const handleDelete = () => {
    closeConfirm();
    if (onDelete) onDelete();
  };

  const renderCardInterior = (textStyleOverride?: any) => (
    <>
      <View style={styles.cardHeader}>
        <View>
          <Text style={[styles.cardType, textStyleOverride]}>{brand}</Text>
          <Text style={[styles.bankName, textStyleOverride]}>{bankName}</Text>
        </View>
        <View style={styles.chipIcon}>
          <Text style={styles.chipText}>💳</Text>
        </View>
      </View>
      <View style={styles.cardNumber}>
        <Text style={[styles.cardNumberText, textStyleOverride]}>{cardNumber}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardDetails}>
          <Text style={[styles.cardLabel, textStyleOverride]}>Card Holder</Text>
          <Text style={[styles.cardValue, textStyleOverride]}>{cardHolderName}</Text>
        </View>
        <View style={styles.cardDetails}>
          <Text style={[styles.cardLabel, textStyleOverride]}>Expires</Text>
          <Text style={[styles.cardValue, textStyleOverride]}>{expiryDate}</Text>
        </View>
      </View>
      <View style={styles.cardTypeLabel}>
        <Text style={[styles.cardTypeLabelText, textStyleOverride]}>
          {cardType === 'credit' ? 'Credit Card' : 'Debit Card'}
        </Text>
      </View>
    </>
  );

  return (
    <>
      <View style={[styles.cardContainer, { backgroundColor: bgColor }]}> 
        {renderCardInterior()}
        <TouchableOpacity
          accessibilityLabel="Delete card"
          onPress={openConfirm}
          style={styles.deleteButton}
        >
          
          <FontAwesome name="trash" size={22} color="#f70202ff" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={confirmVisible}
        transparent
        animationType="fade"
        onRequestClose={closeConfirm}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirm delete</Text>
            <Text style={styles.modalWarning}>
              Are you sure you want to delete this card? This action cannot be undone.
            </Text>

            <View style={[styles.previewCard, { backgroundColor: bgColor }]}>
              {renderCardInterior({ color: '#fff' })}
            </View>

            <View style={styles.modalButtonsRow}>
              <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={closeConfirm} activeOpacity={0.8}>
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.confirmButton]} onPress={handleDelete} activeOpacity={0.8}>
                <Text style={[styles.modalButtonText, { color: '#fff' }]}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 170,
    backgroundColor: "#1a1a1a",
    borderRadius: 15,
    padding: 10,
    paddingRight: 54, // leave space for the delete icon so it doesn't overlap the chip
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    // marginBottom: 20,
    margin: 5
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardType: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  bankName: {
    color: "#ccc",
    fontSize: 12,
    textTransform: "uppercase",
  },
  chipIcon: {
    width: 40,
    height: 30,
    backgroundColor: "#ffd700",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  chipText: {
    fontSize: 16,
  },
  cardNumber: {
    alignItems: "center",
    marginVertical: 20,
  },
  cardNumberText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardDetails: {
    flex: 1,
  },
  cardLabel: {
    color: "#ccc",
    fontSize: 12,
    textTransform: "uppercase",
  },
  cardValue: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardTypeLabel: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  cardTypeLabelText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  deleteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  modalWarning: {
    color: '#333',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },
  previewCard: {
    width: '100%',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  modalButtonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#eee',
  },
  confirmButton: {
    backgroundColor: '#d9534f',
  },
  modalButtonText: {
    color: '#333',
    fontWeight: '600',
  },
});

export default PaymentCard;