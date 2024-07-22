import { SafeAreaView, Text } from "react-native";
import { useSession } from "../../context/ctx";

const Profile = () => {
  const { signOut } = useSession();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out
      </Text>
    </SafeAreaView>
  );
};

export default Profile;
