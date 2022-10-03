export const SortDays = () => {

    const daysWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    const today = new Date().getDay()
    const orderedDays: string[] = []

    orderedDays.push(...daysWeek.slice(0, today + 1))

    const sliceDaysWeek = daysWeek.filter((day) => !orderedDays.includes(day))
    sliceDaysWeek.push(...orderedDays)

    const includeToday = sliceDaysWeek.map((day, i) => {
        if (i === (sliceDaysWeek.length - 1)) {
            day = 'Today'
            return day
        }
        return day
    })

    return includeToday
}