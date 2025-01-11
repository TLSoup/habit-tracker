import React, { useState, useEffect } from 'react';
import { getHabits, setHabits } from '../utils/localStorage';

function HabitForm({ selectedHabit, setSelectedHabit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [goalFrequency, setGoalFrequency] = useState('');

    useEffect(() => {
        if (selectedHabit) {
            setTitle(selectedHabit.title);
            setDescription(selectedHabit.description);
            setGoalFrequency(selectedHabit.goalFrequency);
        } else {
            setTitle('');
            setDescription('');
            setGoalFrequency('');
        }
    }, [selectedHabit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const habits = getHabits();
        if (selectedHabit) {
            // Edit existing habit
            const updatedHabits = habits.map((habit) =>
                habit.id === selectedHabit.id
                    ? { ...habit, title, description, goalFrequency }
                    : habit
            );
            setHabits(updatedHabits);
        } else {
            // Add new habit
            const newHabit = {
                id: Date.now(),
                title,
                description,
                goalFrequency,
            };
            setHabits([...habits, newHabit]);
        }
        setSelectedHabit(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedHabit ? 'Edit Habit' : 'Add Habit'}</h2>
            <input 
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
             <input
                type='text'
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
             />
             <input
                type='number'
                placeholder='Goal Frequency (days)'
                value={goalFrequency}
                onChange={(e) => setGoalFrequency(e.target.value)}
                required
             />
             <button type='submit'>{selectedHabit ? 'Update' : 'Add'}</button>
        </form>
    );
}

export default HabitForm;