import { useState } from "react";
import { Alert } from "react-native";
import { loginApi } from "../utils/auth";
import { useAuthContext } from "../store/authContext";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const { authenticate } = useAuthContext();

  const handleLogin = async ({ email, password }) => {
    try {
      setIsLoading(true);

      const token = await loginApi(email, password);

      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your credentials or try again later"
      );
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
