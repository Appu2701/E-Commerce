import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface AddressData {
  name: string;
  primaryNumber: string;
  alternativeNumber: string;
  houseNo: string;
  street: string;
  village: string;
  district: string;
  state: string;
  pincode: string;
}

interface AddressCardProps {
  name: string;
  primaryNumber: string;
  alternativeNumber: string;
  houseNo: string;
  street: string;
  village: string;
  district: string;
  state: string;
  pincode: string;
  addressType?: 'home' | 'work';
  onEdit?: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  name,
  primaryNumber,
  alternativeNumber,
  houseNo,
  street,
  village,
  district,
  state,
  pincode,
  addressType = 'home',
  onEdit,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState<AddressData>({
    name,
    primaryNumber,
    alternativeNumber,
    houseNo,
    street,
    village,
    district,
    state,
    pincode,
  });

  const handleEdit = () => {
    setEditData({
      name,
      primaryNumber,
      alternativeNumber,
      houseNo,
      street,
      village,
      district,
      state,
      pincode,
    });
    setModalVisible(true);
  };

  const handleSave = () => {
    // Since data is passed as props, we call onEdit callback if provided
    // The parent component should handle the actual data update
    if (onEdit) {
      onEdit();
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View
        style={{
            marginBottom: 15,
        //   borderBottomWidth: 1,
        //     borderColor: '#ccc',
          borderRadius: 15,
          padding: 5,
          backgroundColor: '#f9f9f9',
          width: '100%',
        }}
      >
        {/* Header Row */}
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Side - Home Icon + Home Text + Name + Mobile Numbers */}
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            {/* Home/Work Badge */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#007bff',
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 15,
                marginRight: 10,
              }}
            >
              <FontAwesome
                name={addressType === 'home' ? 'home' : 'briefcase'}
                size={14}
                color="#fff"
                style={{ marginRight: 4 }}
              />
              <Text style={{ fontSize: 12, color: '#fff', fontWeight: '500' }}>
                {addressType === 'home' ? 'Home' : 'Work'}
              </Text>
            </View>

            {/* Name */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#333' }}>
                Name:
              </Text>
              <Text style={{ fontSize: 16, color: '#333', marginLeft: 5 }}>
                {name}
              </Text>
            </View>

            {/* Primary Number */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#333' }}>
                Primary Number:
              </Text>
              <Text style={{ fontSize: 16, color: '#333', marginLeft: 5 }}>
                {primaryNumber}
              </Text>
            </View>

            {/* Alternative Number */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#333' }}>
                Alternative Number:
              </Text>
              <Text style={{ fontSize: 16, color: '#333', marginLeft: 5 }}>
                {alternativeNumber}
              </Text>
            </View>
          </View>

          {/* Right Side - Edit Button */}
          <TouchableOpacity
            onPress={handleEdit}
            style={{
              backgroundColor: '#007bff',
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>
              Edit
            </Text>
          </TouchableOpacity>
        </View>

        {/* Address Details */}
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>
              House No:
            </Text>
            <Text style={{ fontSize: 14, color: '#333' }}>{houseNo}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>
              Street:
            </Text>
            <Text style={{ fontSize: 14, color: '#333' }}>{street}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>
              Village:
            </Text>
            <Text style={{ fontSize: 14, color: '#333' }}>{village}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>
              District:
            </Text>
            <Text style={{ fontSize: 14, color: '#333' }}>{district}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>
              State:
            </Text>
            <Text style={{ fontSize: 14, color: '#333' }}>{state}</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#555' }}>
              Pincode:
            </Text>
            <Text style={{ fontSize: 14, color: '#333' }}>{pincode}</Text>
          </View>
        </View>

        {/* <View style={{ height: 1, backgroundColor: '#ddd', marginVertical: 10, width: '100%' }} /> */}

      </View>

      {/* Edit Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Address</Text>
            <ScrollView style={styles.scrollView}>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.name}
                  onChangeText={(text) => setEditData({ ...editData, name: text })}
                  placeholder="Enter name"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Primary Number:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.primaryNumber}
                  onChangeText={(text) => setEditData({ ...editData, primaryNumber: text })}
                  placeholder="Enter primary number"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Alternative Number:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.alternativeNumber}
                  onChangeText={(text) => setEditData({ ...editData, alternativeNumber: text })}
                  placeholder="Enter alternative number"
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>House No:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.houseNo}
                  onChangeText={(text) => setEditData({ ...editData, houseNo: text })}
                  placeholder="Enter house number"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Street:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.street}
                  onChangeText={(text) => setEditData({ ...editData, street: text })}
                  placeholder="Enter street"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Village:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.village}
                  onChangeText={(text) => setEditData({ ...editData, village: text })}
                  placeholder="Enter village"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>District:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.district}
                  onChangeText={(text) => setEditData({ ...editData, district: text })}
                  placeholder="Enter district"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>State:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.state}
                  onChangeText={(text) => setEditData({ ...editData, state: text })}
                  placeholder="Enter state"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.label}>Pincode:</Text>
                <TextInput
                  style={styles.input}
                  value={editData.pincode}
                  onChangeText={(text) => setEditData({ ...editData, pincode: text })}
                  placeholder="Enter pincode"
                  keyboardType="numeric"
                />
              </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '50%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  scrollView: {
    maxHeight: 400,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#faf61fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default AddressCard;