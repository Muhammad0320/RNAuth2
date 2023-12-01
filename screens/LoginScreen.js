import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginApi } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);

    await loginApi(email, password);

    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingOverlay message="Logging you in" />;
  }

  return <AuthContent isLogin onAuthenticate={handleLogin} />;
}

export default LoginScreen;
