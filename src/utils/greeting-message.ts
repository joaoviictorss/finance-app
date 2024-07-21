export const getGreetingMessage = () => {
  let hour = new Date().getHours();
  if (hour <= 5) return "Boa madrugada";
  if (hour < 12) return "Bom dia";
  if (hour < 18) return "Boa tarde";
  return "Boa noite";
};
