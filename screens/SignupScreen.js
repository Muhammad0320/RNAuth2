import { useState } from "react";
import { Alert } from "react-native";
import { signupApi } from "../utils/auth";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useAuthContext } from "../store/authContext";

function SignupScreen() {
  const [isAuthenticating, setISAuthenticating] = useState(false);

  const { authenticate } = useAuthContext();

  const handleSignup = async ({ email, password }) => {
    try {
      setISAuthenticating(true);

      const token = await signupApi(email, password);

      authenticate(token);
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
