import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    try {
      console.log(email, password);
      setIsLoading(true);

      await loginApi(email, password);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not log you in, please check your credentials or try again later"
      );
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
