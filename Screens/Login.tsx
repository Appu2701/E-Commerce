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
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../types/navigation";
import FloatingLabelInput from "../Components/FloatingLabelInput";

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Navigate to Test screen
    navigation.navigate("Test");
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
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
          <View style={{ alignItems: "center", marginBottom: 40 }}>
            <Text style={mobStyles.title}>Login</Text>
          </View>

          {/* Form Container */}
          <View style={{ flex: 1, alignItems: "center" }}>
            {/* Email or Phone input with error handling */}
            <View style={{ width: "100%", marginBottom: 20 }}>
              <FloatingLabelInput
                label="Email or phone"
                value={email}
                onChangeText={setEmail}
                keyboardType="default"
                autoCapitalize="none"
                returnKeyType="next"
                // onSubmitEditing={handleSubmitEmail}
                testID="email-phone-input"
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

            {/* Forgot Password */}
            <TouchableOpacity style={mobStyles.forgotPasswordContainer}>
              <Text
                style={mobStyles.forgotPasswordText}
                onPress={handleForgetPassword}
              >
                Forget Password ?
              </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
              style={mobStyles.loginButton}
              onPress={handleLogin}
            >
              <Text style={mobStyles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={{ marginBottom: 10, fontSize: 16, color: "#000" }}>
              Or Login with
            </Text>

            <View style={mobStyles.socialButtonContainer}>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <FontAwesome name="google" size={24} color="#EA4335" />
              </TouchableOpacity>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <FontAwesome name="facebook" size={24} color="#1877F3" />
              </TouchableOpacity>
            </View>
            <View style={mobStyles.socialButtonContainer}>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <FontAwesome name="twitter" size={24} color="#1DA1F2" />
              </TouchableOpacity>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <FontAwesome name="linkedin" size={24} color="#0A66C2" />
              </TouchableOpacity>
            </View>

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
                New here?{" "}
                <Text style={{ color: "blue" }} onPress={handleSignUp}>
                  Create an account
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
            <View style={webStyles.loginContainer}>
              <Image
                source={require("../assets/E-Commerce Logo.jpg")}
                resizeMode="contain"
                style={{ width: 100, height: 80 }}
              />
              <Text style={webStyles.text}>Login</Text>
              <Text style={webStyles.labelText}>E-Mail/Phone</Text>
              <TextInput
                keyboardType="default"
                style={webStyles.textInput}
              />
              <Text style={webStyles.labelText}>Password</Text>
              <TextInput
                secureTextEntry
                style={webStyles.textInput}
              />
              <TouchableOpacity
                onPress={handleForgetPassword}
                style={{ width: "80%" }}
              >
                <Text style={webStyles.forgetPassText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={webStyles.button} onPress={handleLogin}>
                <Text style={webStyles.loginButtonText}>Login </Text>
              </TouchableOpacity>
              <Text style={webStyles.socialText}>Or Login with</Text>
              <View style={webStyles.buttonContainer}>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleLogin}
                >
                  <FontAwesome name="google" size={24} color="#EA4335" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleLogin}
                >
                  <FontAwesome name="facebook" size={24} color="#1877F3" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleLogin}
                >
                  <FontAwesome name="twitter" size={24} color="#1DA1F2" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleLogin}
                >
                  <FontAwesome name="linkedin" size={24} color="#0A66C2" />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 12, color: "#666" }}>
                  By continuing, you agree to our Terms of Service and Privacy
                  Policy.
                </Text>
              </View>
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 14, color: "#666666ff" }}>
                  New here?{" "}
                  <Text style={{ color: "blue" }} onPress={handleSignUp}>
                    Create an account
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

export default Login;

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
    backgroundColor: "yellow",
    width: "80%",
    alignItems: "center",
    marginBottom: 25,
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
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "90%",
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
    borderRadius: 50,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
});
