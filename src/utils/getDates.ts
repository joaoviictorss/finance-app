export function getLastSixDays() {
  const days = [];
  const today = new Date();

  // Iterar pelos últimos 6 dias
  for (let i = 6; i >= 0; i--) {
    const pastDate = new Date();
    pastDate.setDate(today.getDate() - i);
    days.push(pastDate);
  }

  return days;
}

export function getLastFourWeeks() {
  const weeks = [];
  const today = new Date();
  const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000; // Milissegundos em uma semana

  for (let i = 0; i < 4; i++) {
    const weekStart = new Date(today.getTime() - (i * oneWeekInMillis));
    const weekEnd = new Date(weekStart.getTime() + oneWeekInMillis - 1);

    weeks.push({
      start: new Date(weekStart.setDate(weekStart.getDate() - weekStart.getDay())), // Início da semana
      end: new Date(weekEnd.setDate(weekEnd.getDate() - weekEnd.getDay() + 6)) // Fim da semana
    });
  }

  const weeksReversed = weeks.reverse(); 
  
  function formatDate(date: Date) {
    return date.toLocaleDateString('pt-BR');
  }
  
  const formattedWeeks = weeksReversed.map(week => ({
    start: formatDate(week.start),
    end: formatDate(week.end)
  }));

  return formattedWeeks;
}


