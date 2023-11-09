export const formatUpdatedAt = (updated_at: string) => {
  const date1 = new Date(updated_at).getUTCDate();
  const date2 = new Date(Date.now()).getUTCDate();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + ` ${diffDays > 1 ? "days" : "day"} ago`;
};
