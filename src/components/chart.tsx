import { BarGroup, CartesianChart } from "victory-native";
import { useFont } from "@shopify/react-native-skia";

import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Text, View } from "react-native";
import {
  dataDays,
  dataMonths,
  dataWeeks,
  dataYears,
  getLastFourWeeks,
  getLastFourYears,
  getLastSixDays,
  getLastSixMonths,
} from "../utils/getDates";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { useTransactions } from "../context/transactions";
import { formatter } from "../utils/formater";

interface ChartProps {
  option: string;
}

const Chart = ({ option }: ChartProps) => {
  const { transactions } = useTransactions();

  const font = useFont(Poppins_400Regular, 12);

  const data = (() => {
    if (option === "day") {
      return dataDays;
    } else if (option === "week") {
      return dataWeeks;
    } else if (option === "month") {
      return dataMonths;
    } else if (option === "year") {
      return dataYears;
    } else {
      return dataDays;
    }
  })();

  return (
    <>
      <View className="bg-customGreen-300 h-80 w-full rounded-3xl mt-2">
        <View className="px-8 py-6 flex-row justify-between items-center">
          <Text className="text-customGreen-900  text-base font-[PoppinsMedium]">
            Entradas e saidas
          </Text>
          <View className="flex-row gap-4">
            <Link
              href={"analysis"}
              className="bg-customGreen-500 p-2 rounded-2xl "
            >
              <Image
                source={require("../assets/icons/search.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </Link>
            <Link
              href={"analysis"}
              className="bg-customGreen-500 p-2 rounded-2xl "
            >
              <Image
                source={require("../assets/icons/calendar.svg")}
                style={{ width: 20, height: 20 }}
                contentFit="contain"
              />
            </Link>
          </View>
        </View>
        <CartesianChart
          data={data}
          xKey="day"
          yKeys={["income", "expense"]}
          domainPadding={{ left: 50, right: 50, top: 20 }}
          axisOptions={{
            font,
            formatXLabel: (value) => {
              const dates = (() => {
                if (option === "Dia") {
                  return getLastSixDays();
                } else if (option === "Semana") {
                  return getLastFourWeeks();
                } else if (option === "Mês") {
                  return getLastSixMonths();
                } else if (option === "Ano") {
                  return getLastFourYears();
                } else {
                  return getLastSixDays();
                }
              })();
              return dates[value];
            },
            lineColor: { grid: { x: "transparent", y: "#6DB6FE" }, frame: 0 },

            labelColor: { x: "#0E3E3E", y: "#0068FF" },
            lineWidth: { grid: { x: 0, y: 0.5 }, frame: 0 },
            labelPosition: { x: "outset", y: "outset" },
            formatYLabel: (value) => {
              return `${value.toFixed()}`;
            },
          }}
        >
          {({ points, chartBounds }) => (
            <BarGroup
              chartBounds={chartBounds}
              barWidth={8}
              betweenGroupPadding={0.5}
              roundedCorners={{ topLeft: 10, topRight: 10 }}
            >
              <BarGroup.Bar points={points.income} color="#00D09E" />
              <BarGroup.Bar
                points={points.expense}
                color="#0068FF"
                animate={{ type: "timing" }}
              />
            </BarGroup>
          )}
        </CartesianChart>
      </View>
      <View className="flex-row items-center justify-center gap-10 mt-8">
        <View className="flex-col gap-1 items-center justify-center">
          <Image
            source={require("../assets/icons/income.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text className="font-[PoppinsMedium] text-base text-customGreen-900 ">
            Entradas
          </Text>
          <Text className="font-[PoppinsSemiBold] text-xl text-customGreen-900">
            {formatter.format(
              data.reduce((acum, item) => acum + item.income, 0)
            )}
          </Text>
        </View>
        <View className="flex-col gap-1 items-center justify-center">
          <Image
            source={require("../assets/icons/expenses.svg")}
            style={{ width: 25, height: 25 }}
          />
          <Text className="font-[PoppinsMedium] text-base text-customGreen-900">
            Saídas
          </Text>
          <Text className="font-[PoppinsSemiBold] text-xl text-customBlue-500">
            {formatter.format(
              data.reduce((acum, item) => acum + item.expense, 0)
            )}
          </Text>
        </View>
      </View>
    </>
  );
};

export default Chart;
