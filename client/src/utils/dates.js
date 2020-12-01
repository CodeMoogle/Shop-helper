export function formatDate(date) {
	if (typeof date !== 'string') {
		throw new Error(`formatDate takes a string as an argument`)
	}
	return date
		.split('-')
		.reverse()
		.join('.')
}

export const compareDates = (checkingDate) => {
  const date = new Date();
	const parsedDate = new Date(checkingDate);

  const expWithinOneMonth = new Date();
  expWithinOneMonth.setMonth(date.getMonth() + 1)
  const expWithinTwoMonth = new Date();
  expWithinTwoMonth.setMonth(date.getMonth() + 2)
  const expWithinThreeMonth = new Date();
	expWithinThreeMonth.setMonth(date.getMonth() + 3)
	
	if (parsedDate < date) return 'exp_overdue'
	if (parsedDate >= date && parsedDate < expWithinOneMonth) return 'exp_danger'
	if (parsedDate > expWithinOneMonth && parsedDate < expWithinTwoMonth) return 'exp_warning'
	if (parsedDate > expWithinTwoMonth && parsedDate < expWithinThreeMonth) return 'exp_success'
}