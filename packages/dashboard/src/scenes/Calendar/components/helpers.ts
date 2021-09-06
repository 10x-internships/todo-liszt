import dayjs from "dayjs";

export const getMonth = (date: string) => dayjs(date).month();
export const getDay = (date: string) => dayjs(date).date();
