import "./app.css"

import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
const App = () => {
  return (
    <div className="app">
        <div className="content">
           <AppInfo />
        </div>
        <div>
            <SearchPanel />
        </div>
        <div>
             <AppFilter />
        </div>

    </div>
  )
}

export default App