import { Pressable, SafeAreaView, Text, View } from "react-native";
import { useSession } from "../../context/ctx";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Image } from "expo-image";
import { useState } from "react";
import LogoutModal from "@/src/components/ui/logout-modal";

const Profile = () => {
  const { session, isLoading } = useSession();
  const userInfo = JSON.parse(session!);
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <SafeAreaView className="flex-1 bg-customGreen-500 ">
        <View className="pt-16 p-8">
          <View className="flex-row items-center justify-between">
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={24} color="#f1fff3" />
            </Pressable>
            <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
              Perfil
            </Text>
            <Pressable className="bg-customGreen-200 rounded-full p-2 items-center justify-center">
              <Image
                source={require("../../assets/icons/bell.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
                tintColor={"#031314"}
              />
            </Pressable>
          </View>
        </View>
        <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-2 w-full mt-20">
          <View className="items-center justify-center absolute left-0 right-0 -translate-y-1/2">
            {userInfo.avatar ? (
              <View className="bg-customGreen-300 rounded-full w-40 h-40 flex-row items-center justify-center">
                <Image
                  source={{ uri: userInfo.avatar }}
                  style={{ width: 120, height: 120 }}
                  contentFit="cover"
                />
              </View>
            ) : (
              <View className="bg-customGreen-300 rounded-full w-40 h-40 flex-row items-center justify-center">
                <Ionicons name="person" size={60} color="#00d09e" />
              </View>
            )}
          </View>
          <View className="items-center justify-center mt-24">
            <Text className="text-customGreen-800 font-[PoppinsBold] text-xl text-center">
              {userInfo.full_name.split(" ")[0]}{" "}
              {userInfo.full_name.split(" ")[1]}
            </Text>
          </View>
          <View>
            <Pressable className="flex-row items-center gap-6 mt-8">
              <View className="bg-customBlue-400 p-4 rounded-3xl">
                <Ionicons name="person" size={24} color="white" />
              </View>
              <Text className="font-[PoppinsMedium] text-base text-customGreen-800">
                Editar Perfil
              </Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-6 mt-8">
              <View className="bg-customBlue-400 p-4 rounded-3xl">
                <Ionicons name="settings-outline" size={24} color="white" />
              </View>
              <Text className="font-[PoppinsMedium] text-base text-customGreen-800">
                Configurações
              </Text>
            </Pressable>
            <Pressable
              className="flex-row items-center gap-6 mt-8"
              onPress={handleOpenModal}
            >
              <View className="bg-customBlue-400 p-4 rounded-3xl">
                <Ionicons name="exit-outline" size={24} color="white" />
              </View>
              <Text className="font-[PoppinsMedium] text-base text-customGreen-800">
                Encerrar sessão
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      {showModal && <LogoutModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Profile;
