import { useEffect, useState } from "react"

import Home from "./pages/Home"

import Loader from "./components/common/Loader"

import useLenis from "./hooks/useLenis"

const App = () => {

  useLenis()

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2200)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {
    return <Loader />
  }

  return <Home />
}

export default App