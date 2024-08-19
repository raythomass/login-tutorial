import { useContext, useEffect } from "react"
import { UserContext } from "../../context/userContext"


export default function Dashboard() {
    const {user} = useContext(UserContext)

    function reloadPage() {
      var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
      // Current Time //
      var now = Date.now();
      // Total Process Lenght as Minutes //
      var tenSec = 10 * 1000;
      // End Time of Process //
      var plusTenSec = currentDocumentTimestamp + tenSec;
      if (now > plusTenSec) {
          location.reload();
      }
  }

    useEffect(() => {
      reloadPage();
    }, [])
  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2>Hi {user.name}!</h2>)}
    </div>
  )
}
