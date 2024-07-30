export function getLastSixDays() {
  const days = [];
  const today = new Date();

  // Iterar pelos últimos 6 dias
  for (let i = 6; i >= 0; i--) {
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - i);
    days.push(pastDate);
  }

  const formattedDays = days.map((date) =>
    date.toLocaleDateString("pt-BR", { day: "numeric" })
  );

  return formattedDays;
}

export function getLastFourWeeks() {
  const weeks = [];
  const today = new Date();

  for (let i = 0; i <= 4; i++) {
    const pastWeek = new Date(today);
    pastWeek.setDate(today.getDate() - i * 7);
    weeks.push(pastWeek);
  }

  const weeksFormated = weeks.map((date, index) => `${index + 1}º Sem`);

  return weeksFormated;
}

export function getLastSixMonths() {
  const months = [];
  const today = new Date();

  for (let i = 5; i >= 0; i--) {
    const pastMonth = new Date(today.getFullYear(), today.getMonth() - i, 1);
    months.push(pastMonth);
  }

  const monthsFormated = months.map((date) =>
    date.toLocaleDateString("pt-BR", { month: "short" })
  );

  return monthsFormated;
}

export function getLastFourYears() {
  const years = [];
  const today = new Date();

  for (let i = 3; i >= 0; i--) {
    const pastYear = new Date(today.getFullYear() - i, 0, 1);
    years.push(pastYear);
  }

  const formattedYears = years.map((date) =>
    date.toLocaleDateString("pt-BR", { year: "numeric" })
  );

  return formattedYears;
}

export const dataDays = Array.from({ length: 6 }, (_, i) => ({
  day: i + 1,
  income: 40 + 30 * Math.random(),
  expense: 40 + 30 * Math.random(),
}));

export const dataWeeks = Array.from({ length: 4 }, (_, i) => ({
  day: i,
  income: 200 + 50 * Math.random(),
  expense: 200 + 50 * Math.random(),
}));

export const dataMonths = Array.from({ length: 6 }, (_, i) => ({
  day: i,
  income: 2100 + 100 * Math.random(),
  expense: 2000 + 100 * Math.random(),
}));

export const dataYears = Array.from({ length: 4 }, (_, i) => ({
  day: i,
  income: 31000 + 500 * Math.random(),
  expense: 30000 + 500 * Math.random(),
}));
