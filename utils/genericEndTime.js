export const genericEndTime = (time) => {
  //starttime passed in is ISO object

  const isoDate = new Date(time);
  isoDate.setHours(0, 15, 0);

  console.log(" isoDate : ", isoDate);

  return isoDate.toISOString();
};
