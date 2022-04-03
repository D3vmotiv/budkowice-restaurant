export interface openHourItem {
    day: string;
    shortDay: string;
    value: string;
}

const openHours: openHourItem[] = [
    {
        day: 'Poniedziałek',
        shortDay: 'Pon.',
        value: 'Nieczynne',
    },
    {
        day: 'Wtorek',
        shortDay: 'Wt.',
        value: '15:30-21:00',
    },
    {
        day: 'Środa',
        shortDay: 'Śr.',
        value: '15:30-21:00',
    },
    {
        day: 'Czwartek',
        shortDay: 'Czw.',
        value: '15:30-21:00',
    },
    {
        day: 'Piątek',
        shortDay: 'Pt.',
        value: '15:30-22:00',
    },
    {
        day: 'Sobota',
        shortDay: 'Sob.',
        value: '15:30-22:00',
    },
    {
        day: 'Niedziela',
        shortDay: 'Niedz.',
        value: '11:30-21:00',
    },
]

export default openHours