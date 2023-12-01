import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signupApi } from "../utils/auth";
import { Alert } from "react-native";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setISAuthenticating] = useState(false);

  const handleSignup = async ({ email, password }) => {
    try {
      setISAuthenticating(true);

      await signupApi(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Please check your inputs values or try again later "
      );
    }

    setISAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="creating user..." />;
  }

  return <AuthContent onAuthenticate={handleSignup} />;
}

export default SignupScreen;
