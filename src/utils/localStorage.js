export const getHabits = () => JSON.parse(localStorage.getItem('habits')) || [];
export const setHabits = (habits) => localStorage.setItem('habits', JSON.stringify(habits));

export const getEvents = () => JSON.parse(localStorage.getItem('events')) || [];
export const setEvents = (events) => localStorage.setItem('events', JSON.stringify(events));