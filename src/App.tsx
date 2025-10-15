import { Calculator } from "./components/Calculator"
import { PaymentContextProvider } from "./contexts/payments-context-provider"


function App() {

  return (
    <>
    <PaymentContextProvider>
    <main className="lg:h-screen lg:grid lg: place-content-center">
     <Calculator/>
     </main>
     </PaymentContextProvider>
    </>
  )
}

export default App
