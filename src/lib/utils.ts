type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'ko-KR') {
    // console.log(date);
    const d = new Date(date);
    const offset = d.getTimezoneOffset() * 60000;

    const formatter = new Intl.DateTimeFormat(locales, { dateStyle });

    console.log(new Date(d.getTime() + offset));
    return formatter.format(new Date(d.getTime() + offset));
}