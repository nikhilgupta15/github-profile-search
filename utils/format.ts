export const formatUpdatedAt = (updated_at: string) => {
  const date1 = new Date(updated_at);
  const date2 = new Date(Date.now());
  //console.log(date1 + " " + date2);
  const diffTime = date2.getTime() - date1.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + ` ${diffDays > 1 ? "days" : "day"} ago`;
};
