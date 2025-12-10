import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../types/navigation";
import FloatingLabelInput from "../ComponentsWeb/FloatingLabelInput";
import { API_BASE_URL } from "../config/api";
import { useUser } from "../context/UserContext";

const Login = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { setUserData, setIsLoggedIn } = useUser();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter both email/phone and password");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: email, // Assuming email is used as userName
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        // Save user data to AsyncStorage and context
        await AsyncStorage.setItem("isLoggedIn", "true");
        await AsyncStorage.setItem("userData", JSON.stringify(data));
        // Update context
        setUserData(data);
        setIsLoggedIn(true);
        navigation.navigate("Home");
        console.log("Login successful", data);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google Login pressed");
  };
  const handleFacebookLogin = () => {
    console.log("Facebook Login pressed");
  };
  const handleTwitterLogin = () => {
    console.log("Twitter Login pressed");
  };
  const handleLinkedInLogin = () => {
    console.log("LinkedIn Login pressed");
  };

  const handleForgetPassword = () => {
    navigation.navigate("ForgetPassword");
    console.log("Forgot Password pressed");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
    console.log("Sign Up pressed");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#000" />
              ) : (
                <Text style={mobStyles.loginButtonText}>Login</Text>
              )}
            </TouchableOpacity>
            {error ? <Text style={mobStyles.errorText}>{error}</Text> : null}

            <Text style={{ marginBottom: 10, fontSize: 16, color: "#000" }}>
              Or Login with
            </Text>

            <View style={mobStyles.socialButtonContainer}>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={{ width: 32, height: 32 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <Image
                  source={require("../assets/facebook.png")}
                  style={{ width: 32, height: 32 }}
                />
              </TouchableOpacity>
            </View>
            <View style={mobStyles.socialButtonContainer}>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <Image
                  source={require("../assets/twitter.png")}
                  style={{ width: 32, height: 32 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={mobStyles.socialButton}
                onPress={handleLogin}
              >
                <Image
                  source={require("../assets/linkedin.png")}
                  style={{ width: 32, height: 32 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 14, color: "#666" }}>
                By continuing, you agree to our Terms of Service and
              </Text>
              <Text style={mobStyles.privacyPolicyText}>Privacy Policy.</Text>
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
                onChangeText={setEmail}
              />
              <Text style={webStyles.labelText}>Password</Text>
              <View style={webStyles.passwordContainer}>
                <TextInput
                  secureTextEntry={!showPassword}
                  style={[webStyles.textInput, { width: "100%" }]}
                  onChangeText={setPassword}
                />
                {password.length > 0 && (
                  <TouchableOpacity
                    style={webStyles.eyeIcon}
                    onPress={togglePasswordVisibility}
                  >
                    <FontAwesome
                      name={showPassword ? "eye-slash" : "eye"}
                      size={20}
                      color="#666"
                    />
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity
                onPress={handleForgetPassword}
                style={{ width: "100%" }}
              >
                <Text style={webStyles.forgetPassText}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={webStyles.button}
                onPress={handleLogin}
                disabled={loading}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#000" />
                ) : (
                  <Text style={webStyles.loginButtonText}>Login </Text>
                )}
              </TouchableOpacity>
              {error ? <Text style={webStyles.errorText}>{error}</Text> : null}
              <Text style={webStyles.socialText}>Or Login with</Text>
              <View style={webStyles.buttonContainer}>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleGoogleLogin}
                >
                  <Image
                    source={require("../assets/google.png")}
                    style={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleFacebookLogin}
                >
                  <Image
                    source={require("../assets/facebook.png")}
                    style={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleTwitterLogin}
                >
                  <Image
                    source={require("../assets/twitter.png")}
                    style={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={webStyles.socialButton}
                  onPress={handleLinkedInLogin}
                >
                  <Image
                    source={require("../assets/linkedin.png")}
                    style={{ width: 32, height: 32 }}
                  />
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
  privacyPolicyText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
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
    width: "100%",
  },
  textInput: {
    marginBottom: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#807f7fff",
    padding: 5,
    height: 40,
    backgroundColor: "#ebeaeaff",
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
  socialText: {
    marginBottom: 10,
    fontSize: 16,
    color: "#000",
  },
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
    width: 50,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
    // marginBottom: 10,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 7,
    padding: 5,
  },
});
