export const getDateFromDateTime = (datetime: string): String => {
  return datetime.split('T')[0]
}
