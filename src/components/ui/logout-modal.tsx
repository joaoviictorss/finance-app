import { Text, View } from "react-native";
import Button from "./button";
import { useSession } from "@/src/context/ctx";

interface LogoutModalProps {
  onClose: () => void;
}

const LogoutModal = ({ onClose }: LogoutModalProps) => {
  const { signOut } = useSession();
  
  return (
    <View className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 flex-col items-center justify-center z-20">
      <View className="bg-white rounded-3xl p-8 flex-col items-center justify-center gap-4">
        <Text className="font-[PoppinsBold] text-xl text-customGreen-900">
          Encerrar sessão
        </Text>
        <Text className="font-[PoppinsRegular] text-base ">
          Você tem certeza que deseja encerrar sair?
        </Text>
        <Button variant="secondary" className="mt-6" onPress={() => signOut()}>
          <Text>Sim, encerrar sessão</Text>
        </Button>
        <Button variant="primary" onPress={onClose}>
          <Text>Cancelar</Text>
        </Button>
      </View>
    </View>
  );
};

export default LogoutModal;
