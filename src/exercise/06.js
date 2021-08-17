// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [username, setUsername] = React.useState('')
  const onSubmitHandler = e => {
    e.preventDefault()

    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  const handleChange = e => {
    const val = e.target.value
    setUsername(val.toLowerCase())
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          ref={inputRef}
          type="text"
          id="username"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
