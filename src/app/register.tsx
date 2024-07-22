import { SafeAreaView, Text, View } from "react-native";
import CustomTextInput from "../components/ui/custom-text-input";
import PasswordInput from "../components/ui/password-input";
import Button from "../components/ui/button";
import { Link } from "expo-router";
import { startTransition, useState } from "react";
import { RegisterSchema } from "../schemas";
import * as z from "zod";
import { register } from "../utils/auth/register";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    confirmPassword === password
      ? startTransition(() => {
          register(values).then((data) => {
            if (data?.error) {
              return alert(data.error);
            } else {
              return alert(data.sucess);
            }
          });
        })
      : alert("Senhas não coincidem!");
  };

  return (
    <SafeAreaView className="flex-1 flex-col bg-customGreen-500">
      <View className="items-center h-52 justify-center relative">
        <Text className="text-customGreen-900 font-[PoppinsSemiBold] text-3xl">
          Criar conta
        </Text>
      </View>

      <View className="bg-customGreen-200 flex-1 rounded-t-[40px] p-8 flex-col gap-4 pt-5">
        <CustomTextInput
          label="Nome"
          placeholder="Nome completo"
          value={name}
          onChangeText={setName}
        />
        <CustomTextInput
          label="Email"
          placeholder="exemplo@email.com"
          value={email}
          onChangeText={setEmail}
        />
        {/* <CustomTextInput label="Data de nascimento" placeholder="DD/MM/AAAA" /> */}
        <PasswordInput
          label="Senha"
          value={password}
          onChangeText={setPassword}
        />
        <PasswordInput
          label="Confirmar senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <View className="flex-col items-center mt-4">
          <Text className="text-center text-customGreen-900 text-sm">
            Ao continuar, você concorda com os
          </Text>
          <Text className="text-center text-customGreen-900 text-sm">
            <Text className="font-[PoppinsSemiBold] text-sm">
              Termos de uso
            </Text>{" "}
            e{" "}
            <Text className="font-[PoppinsSemiBold] text-sm">
              politica de privacidade
            </Text>{" "}
            .
          </Text>
          <Button
            variant="secondary"
            className="mt-5"
            onPress={() =>
              onSubmit({
                name,
                email,
                password,
                confirmPassword,
              })
            }
          >
            <Text className="text-customGreen-900 font-[PoppinsBold] text-lg">
              Criar conta
            </Text>
          </Button>
          <Text className="mt-6 font-[PoppinsLight] text-customGreen-900">
            Ja possui uma conta?{" "}
            <Link href={"/sign-in"} className="color-customBlue-500">
              Entrar
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;
