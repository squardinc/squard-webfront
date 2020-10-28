import dayjs, { Dayjs } from 'dayjs'

export const formattedDate = (dayjsObj: Dayjs) => dayjsObj.format('YYYY/MM/DD')
export const formattedDateJp = (date: Dayjs | string) => dayjs(date).format('YYYY年MM月DD日')
