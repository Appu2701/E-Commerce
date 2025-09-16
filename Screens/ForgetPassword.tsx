import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ForgetPasswordScreenNavigationProp } from "../types/navigation";
import FloatingLabelInput from "../Components/FloatingLabelInput";

const ForgetPassword = () => {
  const navigation = useNavigation<ForgetPasswordScreenNavigationProp>();

  const [emailagree, setEmailAgree] = useState<boolean>(false);
  const [phoneAgree, setPhoneAgree] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleSignUp = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      {Platform.OS === "android" || Platform.OS === "ios" ? (
        <View style={mobStyles.container}>
          {/* Logo */}
          <Image
            source={require("../assets/E-Commerce Logo.jpg")}
            style={mobStyles.logo}
            resizeMode="contain"
          />

          {/* Header */}
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Text style={mobStyles.title}>Reset Password</Text>
          </View>

          {/* Form Container */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <View style={mobStyles.otpContainer}>
              <View style={mobStyles.rowFlex}>
                <Image
                  source={require("../assets/email.png")}
                  style={{ width: 34, height: 34 }}
                />
                <Text style={mobStyles.rowText}>abc********@example.com</Text>
              </View>
              <TouchableOpacity
                style={{ ...mobStyles.rowFlex, gap: 10 }}
                onPress={() => setEmailAgree(!emailagree)}
              >
                <FontAwesome
                  name={emailagree ? "check-square" : "square-o"}
                  size={22}
                  color={emailagree ? "#4caf50" : "#000"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>
                  I agree to receive OTP on my email
                </Text>
              </TouchableOpacity>
            </View>
            <View style={mobStyles.otpContainer}>
              <View style={mobStyles.rowFlex}>
                <Image
                  source={require("../assets/phone-call.png")}
                  style={{ width: 34, height: 34 }}
                />
                <Text style={mobStyles.rowText}>123******89</Text>
              </View>
              <TouchableOpacity
                style={{ ...mobStyles.rowFlex, gap: 10 }}
                onPress={() => setPhoneAgree(!phoneAgree)}
              >
                <FontAwesome
                  name={phoneAgree ? "check-square" : "square-o"}
                  size={22}
                  color={phoneAgree ? "#4caf50" : "#000"}
                />
                <Text style={{ fontSize: 12, color: "#000" }}>
                  I agree to receive OTP on my phone
                </Text>
              </TouchableOpacity>
            </View>

            {/* Send OTP Button */}
            <TouchableOpacity
              style={mobStyles.otpButton}
              onPress={() => setModalVisible(true)}
            >
              <Text style={mobStyles.otpButtonText}>Send OTP</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>
                By continuing, you agree to our Terms of Service and
              </Text>
              <Text style={mobStyles.privacyPolicyText}>Privacy Policy.</Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 16, color: "#666666ff" }}>
                Got your password?{" "}
                <Text style={{ color: "blue" }} onPress={handleSignUp}>
                  Login Here
                </Text>
              </Text>
            </View>
          </View>
          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={mobStyles.modalVisibleContainer}>
                <TouchableWithoutFeedback>
                  <View style={mobStyles.modalVisibleContent}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={mobStyles.modalCloseButton}
                    >
                      <FontAwesome name="close" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={mobStyles.modalHeader}>Reset Password</Text>
                    <View style={mobStyles.otpInputContainer}>
                      {[...Array(6)].map((_, idx) => (
                        <TextInput
                          key={idx}
                          style={mobStyles.otpInput}
                          maxLength={1}
                          keyboardType="number-pad"
                        />
                      ))}
                    </View>
                    <Text style={mobStyles.resendText}>
                      Resend OTP in{" "}
                      <Text style={{ fontWeight: "bold", color: "blue" }}>
                        30s
                      </Text>
                    </Text>
                    <View style={mobStyles.buttonRow}>
                      <TouchableOpacity style={mobStyles.verifyOtpButton}>
                        <Text style={mobStyles.buttonText}>Verify OTP</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={mobStyles.resendOtpButton}>
                        <Text style={mobStyles.buttonText}>Resend OTP</Text>
                      </TouchableOpacity>
                    </View>
                    {/* Password input with error handling */}
                    <View style={{ width: "100%", marginBottom: 10 }}>
                      <FloatingLabelInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={true}
                        showPasswordToggle={true}
                        returnKeyType="done"
                        // onSubmitEditing={handleSubmitPassword}
                        testID="password-input"
                        isRequired={true}
                        // error={getPasswordError()}
                        // showError={showErrors}
                      />
                    </View>
                    {/* Password input with error handling */}
                    <View
                      style={{ width: "100%", marginBottom: 10, marginTop: 10 }}
                    >
                      <FloatingLabelInput
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true}
                        showPasswordToggle={true}
                        returnKeyType="done"
                        // onSubmitEditing={handleSubmitPassword}
                        testID="password-input"
                        isRequired={true}
                        // error={getPasswordError()}
                        // showError={showErrors}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        /* handle reset password */
                      }}
                      style={mobStyles.resetPasswordButton}
                    >
                      <Text style={mobStyles.resetPasswordButtonText}>
                        Reset Password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      ) : (
        <View style={webStyles.container}>
          <View style={{ width: "45%" }}>
            <Image
              source={require("../assets/ForgetPassword.jpg")}
              resizeMode="cover"
              style={webStyles.imageStyle}
            />
          </View>
          <View style={webStyles.rightInnerContainer}>
            <View style={webStyles.forgetPassContainer}>
              <Image
                source={require("../assets/E-Commerce Logo.jpg")}
                resizeMode="contain"
                style={{ width: 100, height: 80 }}
              />
              <Text style={webStyles.text}>Reset Password</Text>
              <View style={webStyles.otpContainer}>
                <View style={webStyles.rowFlex}>
                  <Image
                    source={require("../assets/email.png")}
                    style={{ width: 34, height: 34 }}
                  />
                  <Text style={webStyles.rowText}>abc********@example.com</Text>
                </View>
                <TouchableOpacity
                  style={{ ...webStyles.rowFlex, gap: 10 }}
                  onPress={() => setEmailAgree(!emailagree)}
                >
                  <FontAwesome
                    name={emailagree ? "check-square" : "square-o"}
                    size={22}
                    color={emailagree ? "#4caf50" : "#000"}
                  />
                  <Text style={{ fontSize: 12, color: "#000" }}>
                    I agree to receive OTP on my email
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[webStyles.otpContainer, { marginTop: 20 }]}>
                <View style={webStyles.rowFlex}>
                  <Image
                    source={require("../assets/phone-call.png")}
                    style={{ width: 34, height: 34 }}
                  />
                  <Text style={webStyles.rowText}>123******89</Text>
                </View>
                <TouchableOpacity
                  style={{ ...webStyles.rowFlex, gap: 10 }}
                  onPress={() => setPhoneAgree(!phoneAgree)}
                >
                  <FontAwesome
                    name={phoneAgree ? "check-square" : "square-o"}
                    size={22}
                    color={phoneAgree ? "#4caf50" : "#000"}
                  />
                  <Text style={{ fontSize: 12, color: "#000" }}>
                    I agree to receive OTP on my phone
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={webStyles.button}
                onPress={() => setModalVisible(true)}
              >
                <Text style={webStyles.otpButtonText}>Send OTP </Text>
              </TouchableOpacity>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 12, color: "#666666ff" }}>
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy.
                </Text>
              </View>
              <View style={{ marginBottom: 40 }}>
                <Text style={{ fontSize: 14, color: "#666666ff" }}>
                  Got your password?{" "}
                  <Text style={{ color: "blue" }} onPress={handleSignUp}>
                    Login Here
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <Modal
            transparent={true}
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={webStyles.modalVisibleContainer}>
                <TouchableWithoutFeedback>
                  <View style={webStyles.modalVisibleContent}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={webStyles.modalCloseButton}
                    >
                      <FontAwesome name="close" size={24} color="red" />
                    </TouchableOpacity>
                    <Text style={webStyles.modalHeader}>Reset Password</Text>
                    <View style={webStyles.otpInputContainer}>
                      {[...Array(6)].map((_, idx) => (
                        <TextInput
                          key={idx}
                          style={webStyles.otpInput}
                          maxLength={1}
                          keyboardType="number-pad"
                        />
                      ))}
                    </View>
                    <Text style={webStyles.resendText}>
                      Resend OTP in{" "}
                      <Text style={{ fontWeight: "bold", color: "blue" }}>
                        30s
                      </Text>
                    </Text>
                    <View style={webStyles.buttonRow}>
                      <TouchableOpacity style={webStyles.verifyOtpButton}>
                        <Text style={webStyles.buttonText}>Verify OTP</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={webStyles.resendOtpButton}>
                        <Text style={webStyles.buttonText}>Resend OTP</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={webStyles.labelText}>Password</Text>
                    <TextInput
                      keyboardType="default"
                      style={webStyles.textInput}
                    />
                    <Text style={webStyles.labelText}>Confirm Password</Text>
                    <TextInput secureTextEntry style={webStyles.textInput} />
                    <TouchableOpacity
                      onPress={() => {
                        /* handle reset password */
                      }}
                      style={webStyles.resetPasswordButton}
                    >
                      <Text style={webStyles.resetPasswordButtonText}>
                        Reset Password
                      </Text>
                    </TouchableOpacity>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      )}
    </>
  );
};

export default ForgetPassword;

const mobStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#333",
  },
  otpContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#ebeaeaff",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  rowFlex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // gap: 5,
  },
  rowText: {
    fontSize: 20,
    color: "#000",
    fontWeight: "500",
    margin: 10,
    textAlign: "center",
  },
  otpButton: {
    marginTop: 30,
    backgroundColor: "yellow",
    width: "80%",
    alignItems: "center",
    marginBottom: 25,
    padding: 15,
    borderRadius: 50,
  },
  otpButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000ff",
  },
  privacyPolicyText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 10,
  },
  modalVisibleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalVisibleContent: {
    width: 380,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalCloseButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginBottom: 5,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#f7f7f7",
  },
  resendText: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  buttonRow: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  verifyOtpButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  resendOtpButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 50,
  },
  resetPasswordButton: {
    backgroundColor: "yellow",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  resetPasswordButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const webStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  imageStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 600,
    height: 650,
  },
  rightInnerContainer: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    width: "55%",
    marginBottom: 30,
  },
  forgetPassContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
    padding: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  otpContainer: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#ebeaeaff",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 2,
  },
  rowFlex: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // gap: 5,
  },
  rowText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#000",
    margin: 10,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "yellow",
    padding: 15,
    borderRadius: 50,
    marginBottom: 15,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  otpButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
  },
  modalVisibleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalVisibleContent: {
    width: 600,
    padding: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalCloseButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  otpInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  otpInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "#f7f7f7",
  },
  resendText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  verifyOtpButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  resendOtpButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 50,
  },
  labelText: {
    marginBottom: 5,
    fontSize: 16,
    textAlign: "left",
    width: "80%",
  },
  textInput: {
    marginBottom: 10,
    width: "80%",
    borderBottomWidth: 1,
    borderBottomColor: "#807f7fff",
    padding: 5,
    height: 40,
    backgroundColor: "#ebeaeaff",
  },
  resetPasswordButton: {
    backgroundColor: "yellow",
    padding: 12,
    borderRadius: 10,
    marginTop: 12,
  },
  resetPasswordButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
