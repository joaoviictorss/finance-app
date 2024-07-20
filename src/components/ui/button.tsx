import { cn } from "@/src/lib/util";
import { Pressable } from "react-native";

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
  return (
    <Pressable
      className={cn(
        "rounded-[30px] items-center justify-center h-12 w-52",
        variant === "primary" ? "bg-customGreen-300" : "bg-customGreen-500 ",
        className
      )}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default Button;
