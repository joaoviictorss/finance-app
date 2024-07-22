import { startTransition, useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { useSession } from "../context/ctx";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { login } from "../utils/auth/login";
import * as z from "zod";
import { LoginSchema } from "../schemas";

import CustomTextInput from "../components/ui/custom-text-input";
import PasswordInput from "../components/ui/password-input";
import Button from "../components/ui/button";

const SignIn = () => {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values).then((data) => {
        if (data?.error) {
          alert(data.error);
        } else {
          signIn(data);
          router.replace("/");
        }
      });
    });
  };

  return (
    <SafeAreaView className="flex-1 flex-col bg-customGreen-500">
      <View className="items-center h-52 justify-center relative">
        <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-3xl">
          Bem vindo!
        </Text>
      </View>

      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-14">
        <CustomTextInput
          label="Email"
          placeholder="exemplo@email.com"
          value={email}
          onChangeText={setEmail}
        />
        <PasswordInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
        />

        <View className="w-full flex-col mt-10 items-center gap-5">
          <Button
            variant="secondary"
            onPress={() => onSubmit({ email, password })}
          >
            <Text className="text-customGreen-900 font-[PoppinsBold] text-lg">
              Entrar
            </Text>
          </Button>

          <Pressable>
            <Text className="font-[PoppinsSemiBold] text-customGreen-900">
              Esqueceu a senha?
            </Text>
          </Pressable>

          <Button variant="primary">
            <Link href="/register">
              <Text className="text-customGreen-900 font-[PoppinsBold] text-lg">
                Cadastrar-se
              </Text>
            </Link>
          </Button>

          <View className="flex-row mt-6">
            <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-lg ">
              Use
            </Text>
            <TouchableOpacity>
              <Text className="text-customBlue-500 font-[PoppinsSemiBold] text-lg">
                {" "}
                impressão digital{" "}
              </Text>
            </TouchableOpacity>
            <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-lg ">
              para entrar
            </Text>
          </View>

          <View>
            <Text className="text-customGreen-900 font-[PoppinsLight] text-sm">
              ou entre com
            </Text>

            <View className="flex-row gap-4 mt-5">
              <TouchableOpacity>
                <Image
                  width={32}
                  height={32}
                  source={require("../assets/icons/facebook-icon.png")}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  width={32}
                  height={32}
                  source={require("../assets/icons/google-icon.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
