export const formatMoney = function (data: number, format: string = 'vi-VN') {
  try {
    return Intl.NumberFormat(format).format(data)
  } catch (err) {
    return data
  }
}
