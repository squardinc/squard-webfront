import { Dayjs } from 'dayjs'

export const formattedDate = (dayjsObj: Dayjs) => dayjsObj.format('YYYY/MM/DD')
