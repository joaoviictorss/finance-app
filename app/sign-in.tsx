import { router } from "expo-router";
import { Text, View } from "react-native";

import { useSession } from "../context/ctx";

export default function SignIn() {
  const { signIn } = useSession();
  return (
    <View className="flex-1 justify-center items-center ">
      <Text
        onPress={() => {
          signIn();
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace("/");
        }}
        className="text-customBlue-400 font-display"
      >
        Sign In
      </Text>
    </View>
  );
}
