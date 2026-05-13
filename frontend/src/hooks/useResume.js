import { useEffect, useState } from "react"

import axios from "axios"
import API_BASE_URL from "../services/api"

const useResume = () => {

  const [resumeLink, setResumeLink] =
    useState("#")

  useEffect(() => {

    const fetchResume = async () => {

      try {

        const response = await axios.get(
          `${API_BASE_URL}/api/resume`
        )

        if (
          response.data?.resumeLink
        ) {
          setResumeLink(
            response.data.resumeLink
          )
        }

      } catch (error) {

        console.log(error)
      }
    }

    fetchResume()

  }, [])

  return resumeLink
}

export default useResume