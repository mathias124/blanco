import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function Ubongoet() {
    return (
        <>
            <div>
                <a href="https://www.youtube.com/" target="_blank">
                    <img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ffb340c-45b5-4137-8b12-98f2fe9645c6/de2cmfo-1e4adc56-98a4-4b9a-8cc8-bfd0046feacb.png/v1/fill/w_800,h_1471/odie__png__by_autism79_de2cmfo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ3MSIsInBhdGgiOiJcL2ZcLzFmZmIzNDBjLTQ1YjUtNDEzNy04YjEyLTk4ZjJmZTk2NDVjNlwvZGUyY21mby0xZTRhZGM1Ni05OGE0LTRiOWEtOGNjOC1iZmQwMDQ2ZmVhY2IucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nQJRZ3EWZAjaiE9cwDb_keUpa9J2XBmnwmanrgahf5s"} className="logo" alt="Vite logo" />
                </a>
            </div>
        </>
    )
}
function App() {
  const [uBongoCounter, setUBongoCounter] = useState(0)

if (uBongoCounter ==10) {
    Ubongoet()
}
  return (
    <>
      <div>
        <a href="https://www.youtube.com/" target="_blank">
          <img src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ffb340c-45b5-4137-8b12-98f2fe9645c6/de2cmfo-1e4adc56-98a4-4b9a-8cc8-bfd0046feacb.png/v1/fill/w_800,h_1471/odie__png__by_autism79_de2cmfo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ3MSIsInBhdGgiOiJcL2ZcLzFmZmIzNDBjLTQ1YjUtNDEzNy04YjEyLTk4ZjJmZTk2NDVjNlwvZGUyY21mby0xZTRhZGM1Ni05OGE0LTRiOWEtOGNjOC1iZmQwMDQ2ZmVhY2IucG5nIiwid2lkdGgiOiI8PTgwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nQJRZ3EWZAjaiE9cwDb_keUpa9J2XBmnwmanrgahf5s"} className="logo" alt="Vite logo" />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={"https://i.pinimg.com/originals/85/4b/78/854b78f76935bea0bf6074c70f176937.png"} className="logo react" alt="React logo" />
        </a>


      </div>
      <h1>Get Garfielded my dude</h1>
      <div className="card">
        <button onClick={() => setUBongoCounter((count) => count + 1)}>
          count is {uBongoCounter}
        </button>
        <p>
          Få 10 og bliv uBongoet
        </p>
          <div>

          <a href="https://twitter.com/bulgunir" target="_blank">
              <img src={"https://media1.tenor.com/m/XegHfcae2QEAAAAd/bonk-dog.gif"}/>
          </a>

      </div>

      </div>
    </>
  )
}



export default App
