// FloatingLabelInput.tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TextInputProps, 
  ViewStyle, 
  TextStyle,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  TouchableOpacity
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Define the props interface
interface FloatingLabelInputProps extends Omit<TextInputProps, 'style' | 'onChangeText'> {
  // Required props
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  
  // Optional styling props
  style?: ViewStyle;
  labelStyle?: TextStyle;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  
  // Color customization
  focusedColor?: string;
  unfocusedColor?: string;
  labelColor?: string;
  focusedLabelColor?: string;
  
  // Input behavior
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  secureTextEntry?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  
  // Event handlers
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  
  // Additional props
  placeholder?: string;
  maxLength?: number;
  testID?: string;
  showPasswordToggle?: boolean; // New prop for password toggle
  
  // Error handling props
  error?: string;
  isRequired?: boolean;
  errorColor?: string;
  showError?: boolean; // New prop to control when to show errors
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({ 
  label,
  value, 
  onChangeText, 
  placeholder, 
  keyboardType = "default",
  autoCapitalize = "sentences",
  secureTextEntry = false,
  multiline = false,
  numberOfLines = 1,
  editable = true,
  style,
  labelStyle,
  inputStyle,
  containerStyle,
  focusedColor = "#2196F3",
  unfocusedColor = "#ccc",
  labelColor = "#999",
  focusedLabelColor,
  returnKeyType = "done",
  onFocus,
  onBlur,
  onSubmitEditing,
  maxLength,
  testID,
  showPasswordToggle = false,
  error,
  isRequired = false,
  errorColor = "#F44336",
  showError = false, // Default to false - errors hidden initially
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const hasValue: boolean = Boolean(value && value.length > 0);
  const shouldFloat: boolean = isFocused || hasValue;
  
  // Check if field has error (only show when showError is true)
  const hasError: boolean = showError && Boolean(error || (isRequired && !hasValue));
  
  // Use focusedColor for focused label if focusedLabelColor not provided
  const finalFocusedLabelColor: string = focusedLabelColor || focusedColor;

  const handleFocus = (): void => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = (): void => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleSubmitEditing = (): void => {
    onSubmitEditing?.();
  };

  const togglePasswordVisibility = (): void => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Determine if we should show password or not
  const shouldSecureText = showPasswordToggle ? !isPasswordVisible : secureTextEntry;

  // Dynamic styles based on state
  const containerStyles: ViewStyle = {
    ...styles.container,
    borderColor: hasError ? errorColor : (isFocused ? focusedColor : unfocusedColor),
    borderWidth: isFocused ? 2 : 1,
    ...containerStyle,
    ...style,
  };

  const labelStyles: TextStyle = {
    ...styles.label,
    color: hasError ? errorColor : (shouldFloat ? (isFocused ? finalFocusedLabelColor : labelColor) : labelColor),
    fontSize: shouldFloat ? 12 : 16,
    top: shouldFloat ? -8 : 20,
    fontWeight: shouldFloat ? '500' : 'normal',
    ...labelStyle,
    ...(isFocused && !hasError && { color: finalFocusedLabelColor }),
  };

  const inputStyles: TextStyle = {
    ...styles.input,
    paddingRight: (showPasswordToggle && hasValue) ? 45 : 16, // Add padding only when eye icon is visible
    ...inputStyle,
  };

  return (
    <View>
      <View style={containerStyles} testID={testID}>
        <Text style={labelStyles}>
          {label}{isRequired && <Text style={{ color: '#F44336' }}> *</Text>}
        </Text>
        <TextInput
          style={inputStyles}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onSubmitEditing={handleSubmitEditing}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          secureTextEntry={shouldSecureText}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          returnKeyType={returnKeyType}
          placeholder={shouldFloat ? placeholder : ""}
          placeholderTextColor="#999"
          maxLength={maxLength}
          {...props}
        />
        {showPasswordToggle && hasValue && (
          <TouchableOpacity 
            style={styles.eyeIcon} 
            onPress={togglePasswordVisibility}
            testID={`${testID}-eye-toggle`}
          >
            <FontAwesome 
              name={isPasswordVisible ? "eye-slash" : "eye"} 
              size={20} 
              color="#666" 
            />
          </TouchableOpacity>
        )}
      </View>
      {hasError && (
        <Text style={[styles.errorText, { color: errorColor }]} testID={`${testID}-error`}>
          {error || `${label} is required`}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
    minHeight: 56,
    justifyContent: 'center',
  } as ViewStyle,
  label: {
    position: 'absolute',
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    zIndex: 1,
  } as TextStyle,
  input: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 8,
    minHeight: 24,
    paddingTop: 8,
  } as TextStyle,
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: 8,
  } as ViewStyle,
  errorText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  } as TextStyle,
});

export default FloatingLabelInput;