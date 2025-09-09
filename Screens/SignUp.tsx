import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SignUpScreenNavigationProp } from "../types/navigation";
import FloatingLabelInput from "../Components/FloatingLabelInput";

const SignUp = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleLogin = () => {
    // Navigate to Login screen
    navigation.navigate("Login");
  };

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
            <Text style={mobStyles.title}>Sign UP</Text>
          </View>

          {/* Form Container */}
          <View style={{ flex: 1, alignItems: "center" }}>
            {/* Email or Phone input with error handling */}
            <View style={{ width: "100%", marginBottom: 10 }}>
              <FloatingLabelInput
                label="First Name"
                value={firstName}
                onChangeText={setFirstName}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={handleSubmitEmail}
                testID="first-name-input"
                isRequired={true}
                // error={getEmailOrPhoneError()}
                // showError={showErrors}
              />
            </View>

            <View style={{ width: "100%", marginBottom: 10 }}>
              <FloatingLabelInput
                label="Last Name"
                value={lastName}
                onChangeText={setLastName}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={handleSubmitEmail}
                testID="last-name-input"
                isRequired={true}
                // error={getEmailOrPhoneError()}
                // showError={showErrors}
              />
            </View>
            <View style={{ width: "100%", marginBottom: 10 }}>
              <FloatingLabelInput
                label="E-Mail Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={handleSubmitEmail}
                testID="email-input"
                isRequired={true}
                // error={getEmailOrPhoneError()}
                // showError={showErrors}
              />
            </View>
            <View style={{ width: "100%", marginBottom: 10 }}>
              <FloatingLabelInput
                label="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={handleSubmitEmail}
                testID="phone-input"
                isRequired={true}
                // error={getEmailOrPhoneError()}
                // showError={showErrors}
              />
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
            <View style={{ width: "100%", marginBottom: 10 }}>
              <FloatingLabelInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={true}
                showPasswordToggle={true}
                returnKeyType="done"
                // onSubmitEditing={handleSubmitPassword}
                testID="confirm-password-input"
                isRequired={true}
                // error={getPasswordError()}
                // showError={showErrors}
              />
            </View>

            {/* Login Button */}
            <TouchableOpacity
              style={mobStyles.loginButton}
              onPress={handleLogin}
            >
              <Text style={mobStyles.loginButtonText}>Sign UP</Text>
            </TouchableOpacity>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>
                By continuing, you agree to our Terms of Service and
              </Text>
              <Text style={{ fontSize: 14, color: "#666", textAlign: "center", marginTop: 2, marginBottom: 10 }}>
                Privacy Policy.
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 16, color: "#666666ff" }}>
                Already have an account?{" "}
                <Text style={{ color: "blue" }} onPress={handleSignUp}>
                  Login here
                </Text>
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={webStyles.container}>
          <View style={{ width: "45%" }}>
            <Image
              source={require("../assets/E-Commerce side BG.jpg")}
              resizeMode="cover"
              style={webStyles.imageStyle}
            />
          </View>
          <View style={webStyles.rightInnerContainer}>
            <View style={webStyles.signUpContainer}>
              <Image
                source={require("../assets/E-Commerce Logo.jpg")}
                resizeMode="contain"
                style={{ width: 100, height: 80 }}
              />
              <Text style={webStyles.text}>Sign UP</Text>
              <View style={{ ...webStyles.inputRow, marginTop: 10 }}>
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <Text style={webStyles.labelText}>First Name</Text>
                  <TextInput
                    keyboardType="default"
                    style={webStyles.textInput}
                  />
                </View>
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <Text style={webStyles.labelText}>Last Name</Text>
                  <TextInput
                    keyboardType="default"
                    style={webStyles.textInput}
                  />
                </View>
              </View>
              <View style={{ ...webStyles.inputRow, marginTop: 5 }}>
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <Text style={webStyles.labelText}>E-Mail Address</Text>
                  <TextInput
                    keyboardType="email-address"
                    style={webStyles.textInput}
                  />
                </View>
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <Text style={webStyles.labelText}>Phone Number</Text>
                  <TextInput
                    keyboardType="phone-pad"
                    style={webStyles.textInput}
                  />
                </View>
              </View>
              <View
                style={{
                  ...webStyles.inputRow,
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <Text style={webStyles.labelText}>Password</Text>
                  <TextInput
                    keyboardType="default"
                    style={webStyles.textInput}
                  />
                </View>
                <View style={{ flexDirection: "column", width: "50%" }}>
                  <Text style={webStyles.labelText}>Confirm Password</Text>
                  <TextInput
                    keyboardType="default"
                    style={webStyles.textInput}
                  />
                </View>
              </View>
              <TouchableOpacity style={webStyles.button} onPress={handleLogin}>
                <Text style={webStyles.loginButtonText}>Sign UP </Text>
              </TouchableOpacity>
              <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 12, color: "#666" }}>
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy.
                </Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 14, color: "#666666ff" }}>
                  Already have an account?{" "}
                  <Text style={{ color: "blue" }} onPress={handleLogin}>
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default SignUp;

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
    // marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "#333",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginBottom: 30,
    marginTop: -8,
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: "400",
    color: "blue",
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: "yellow",
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
    padding: 15,
    borderRadius: 50,
  },
  loginButtonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000ff",
  },
  socialText: { marginBottom: 10, fontSize: 16, color: "#000" },
  socialButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  socialButton: {
    backgroundColor: "#fdfdfdff",
    padding: 5,
    borderRadius: 50,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
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
    height: 550,
  },
  rightInnerContainer: {
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    width: "55%",
    marginBottom: 30,
  },
  signUpContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
  },
  inputRow: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
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
    borderBottomColor: "#ccc",
    padding: 5,
    height: 40,
    backgroundColor: "#f9f9f9",
  },
  forgetPassText: {
    marginBottom: 10,
    fontSize: 12,
    textAlign: "right",
    color: "blue",
  },
  button: {
    marginTop: 10,
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
  loginButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000ff",
  },
  socialText: { marginBottom: 10, fontSize: 16, color: "#000" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    width: "80%",
  },
  socialButton: {
    backgroundColor: "#fdfdfdff",
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
});
