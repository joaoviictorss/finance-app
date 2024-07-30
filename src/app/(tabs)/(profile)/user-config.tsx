import Button from "@/src/components/ui/button";
import CustomTextInput from "@/src/components/ui/custom-text-input";
import InputContainer from "@/src/components/ui/input-container";
import CustomSwitch from "@/src/components/ui/switch";
import { useSession } from "@/src/context/ctx";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

const UserConfigPage = () => {
  const navigation = useNavigation();
  const { session, isLoading } = useSession();
  const userInfo = JSON.parse(session!);

  const [name, setName] = useState(userInfo.full_name);
  const [email, setEmail] = useState(userInfo.email);

  return (
    <SafeAreaView className="flex-1 bg-customGreen-500 ">
      <View className="pt-16 p-8">
        <View className="flex-row items-center justify-between">
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#f1fff3" />
          </Pressable>
          <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-xl">
            Editar meu Perfil
          </Text>
          <Pressable className="bg-customGreen-200 rounded-full p-2 items-center justify-center">
            <Image
              source={require("@/src/assets/icons/bell.svg")}
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
        <View className="flex-col mt-8">
          <Text className="font-[PoppinsSemiBold] text-xl">
            Configurações de conta
          </Text>
          <View className="mt-8 flex-col gap-4">
            <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
              Nome de Usuário
            </Text>
            <TextInput
              value={name}
              placeholder={"Nome de Usuário"}
              onChangeText={setName}
              className="text-customGreen-800 text-sm font-[PoppinsLight] bg-customGreen-300 p-2 rounded-2xl ml-0 px-4"
            />

            <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
              Endereço de E-mail
            </Text>
            <TextInput
              value={email}
              placeholder={"Endereço de E-mail"}
              onChangeText={setEmail}
              className="text-customGreen-800 text-sm font-[PoppinsLight] bg-customGreen-300 p-2 rounded-2xl ml-0 px-4"
            />
            <View className="mt-4 flex-row items-center justify-between">
              <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
                Notificações
              </Text>
              <CustomSwitch />
            </View>
            <View className="mt-5 items-center justify-center">
              <Button variant="secondary">
                <Text>Salvar alterações</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserConfigPage;
