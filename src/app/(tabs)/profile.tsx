import { SafeAreaView, Text } from "react-native";
import { useSession } from "../../context/ctx";

const Profile = () => {
  const { signOut } = useSession();
  return (
    <SafeAreaView>
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
