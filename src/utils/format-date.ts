export function formatDate(date: Date) {
  const formatedDate = new Date(date);

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    minute: "2-digit",
    hour: "2-digit",
    hour12: false,
  });
  return formatter.format(formatedDate);
}

export function formatMonth(date: string) {
  const formatedDate = new Date(date);

  const formatter = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    timeZone: "America/Sao_Paulo",
  });

  return formatter.format(formatedDate);
}
