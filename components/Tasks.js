import React from 'react'

const Tasks = () => {
  return (
    <form>
      <label for='design'>
        LH: Website: Design
        <span></span>
        <input type='text' id='design' placeholder='25%' />
      </label>
      <label for='paceport'>
        TCS: Paceport CMI
        <span></span>
        <input type='text' id='paceport' placeholder='25%' />
      </label>
      <label for='sprints'>
        IHS: Sprints
        <span></span>
        <input type='text' id='sprints' placeholder='50%' />
      </label>
    </form>
  )
}

export default Tasks
