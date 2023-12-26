export  const calendarData = (monthData, days) => {
  const dayList = []; 
  for (let i = 1; i <= days; i += 1) {
    const index = monthData.findIndex(({ date }) => date === i);
    if (!!~index) {
      dayList.push(monthData[index]);
    } else {
      const dayNumber = i;
      dayList.push({ date: dayNumber });
    }
  }
  return dayList;
};
export function findData(state) {   
  return state.map(
    ({ date, entriesQuantity, dailyWaterRequirement, dailyProgress }) => {
      return {
        date: Number(date.slice(0, 2)),
        entriesQuantity,
        dailyWaterRequirement,
        dailyProgress,
      };
    }
  );
}
export  const daysInMonth = curDate => {
  const days = new Date(
  curDate.getFullYear(),
  curDate.getMonth() + 1,
  0
).getDate();
return days
};