import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { ProfileScreenNavigationProp } from "../types/navigation";
import { useUser } from "../context/UserContext";
import { useEffect } from 'react';

const Profile = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const { userData, logout } = useUser();

  const profileInfo = userData?.data;

  const handleLogout = async () => {
    await logout();
    console.log("Logout Clicked");
    navigation.navigate("Login"); // Navigate to Login screen
  }

  useEffect(() => {
    console.log("Profile mounted");
    console.log("User Data:", userData?.data);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Profile</Text>
        
        {userData ? (
          <View style={styles.userDataContainer}>
            <Text style={styles.sectionTitle}>User Information</Text>
            
            {profileInfo?.firstName && (
              <View style={styles.dataRow}>
                <Text style={styles.label}>First Name:</Text>
                <Text style={styles.value}>{profileInfo.firstName}</Text>
              </View>
            )}
            
            {profileInfo?.lastName && (
              <View style={styles.dataRow}>
                <Text style={styles.label}>Last Name:</Text>
                <Text style={styles.value}>{profileInfo.lastName}</Text>
              </View>
            )}
            
            {profileInfo?.email && (
              <View style={styles.dataRow}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{profileInfo.email}</Text>
              </View>
            )}
            
            {profileInfo?.phone && (
              <View style={styles.dataRow}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>{profileInfo.phone}</Text>
              </View>
            )}
            
            {/* Display success and message */}
            <View style={styles.dataRow}>
              <Text style={styles.label}>Status:</Text>
              <Text style={[styles.value, { color: userData.success ? 'green' : 'red' }]}>
                {userData.success ? 'Success' : 'Failed'}
              </Text>
            </View>
            
            {userData.message && (
              <View style={styles.dataRow}>
                <Text style={styles.label}>Message:</Text>
                <Text style={styles.value}>{userData.message}</Text>
              </View>
            )}
          </View>
        ) : (
          <Text style={styles.noDataText}>No user data available</Text>
        )}
        
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Profile

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: '#333',
  },
  userDataContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    width: 100,
    marginRight: 10,
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  noDataText: {
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    minWidth: 120,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 16,
  },
})