import React from 'react';
import s from './calendar.module.css'

function Calendar(props) {

  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

  const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']






  return (
    <div className={s.calendar}>

      <header>
        <button >{`<`}</button>


        <select>{
          monthNames.map((name, i) => (<option key={i} > {name}</option>))
        }

        </select>


        <select>
          {
            years.map((year) => (<option key={year} > {year}</option>))

          }

        </select>


        <button>{`>`}</button>
      </header>

      <table>
        <thead>
          <tr>
            {
              weekDayNames.map((name) => (<th key={name}>{name}</th>))
            }
          </tr>
        </thead>

        <tbody>


        </tbody>
      </table>


    </div>
  );
}

export default Calendar;