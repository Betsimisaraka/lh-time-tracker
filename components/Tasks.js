import React from 'react'

const Tasks = () => {
  return (
    <form>
      <label for='design'>
        LH: Website: Design
        <input type='text' id='design' placeholder='25%' />
        <span></span>
      </label>
      <label for='paceport'>
        TCS: Paceport CMI
        <input type='text' id='paceport' placeholder='25%' />
        <span></span>
      </label>
      <label for='sprints'>
        IHS: Sprints
        <input type='text' id='sprints' placeholder='50%' />
        <span></span>
      </label>
    </form>
  )
}

export default Tasks
