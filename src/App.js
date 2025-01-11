import React, { useState } from 'react';
//import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';
//import HabitCalendar from './components/HabitCalendar';

function App() {
  const [selectedHabit, setSelectedHabit] = useState(null);

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/* <HabitList setSelectedHabit={setSelectedHabit} /> */}
      <HabitForm selectedHabit={selectedHabit} setSelectedHabit={setSelectedHabit} />
      {/* {selectedHabit && <HabitCalendar habitId={selectedHabit.id} />} */}
    </div>
  );
}

export default App;
