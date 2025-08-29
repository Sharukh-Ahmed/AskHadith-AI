'use client'

import { useState } from "react"

const LandingPage = () => {
    const [data, setData] = useState<any[]>([])
    const BASE_URL = 'https://hadithapi.com/api/books?apiKey=$2y$10$w78rfk0k4Lu1AoTsmIE4TFXfKWP2EOTNuTSC2frcH3qyCoXUYtf2'

    const fetchData = async () => {
        const res = await fetch(BASE_URL);
        const resData = await res.json();
        setData(resData);
    }
    return (
        <div>
            <h1>The Hadith Of the Prophet Muhammad</h1>
            {data.length > 0 ? 
            (<div>

            </div>
                ) : (<p>No Data Found</p>)}
        </div>
    )
}

export default LandingPage