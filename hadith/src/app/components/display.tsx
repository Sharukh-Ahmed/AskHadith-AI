'use client'

import React, { useEffect, useState } from 'react'

const Display = () => {
    const [data, setData] = useState<any[]>([])
    // const SECRETKEY = process.env.NEXT_PUBLIC_SECRETKEY

    const BASE_URL = 'https://hadithapi.com/api/hadiths?apiKey=$2y$10$w78rfk0k4Lu1AoTsmIE4TFXfKWP2EOTNuTSC2frcH3qyCoXUYtf2';

    const fetchData = async (BASE_URL: string) => {
        const res = await fetch(BASE_URL);
        const resData = await res.json();
        // Defensive check
        // if (resData?.hadiths?.data) {
        setData(resData.hadiths.data);
        // } else {
        //     setData([]); // fallback to empty array
        // }
        console.log("Fetched Data", resData);
        console.log("Fetched Data", data);

    }

    useEffect(() => {
        fetchData(BASE_URL);
    }, [BASE_URL])

    return (
        <div className='flex flex-col justify-center items-center min-h-screen w-full bg-background gap-2 mt-20'>

            {data.length > 0 ? (
                data.map((hadith: any) => (
                    <div>
                        <div key={hadith.book.id} className='bg-background text-white flex flex-col justify-center'>{hadith.book.bookName}
                            <div className='text-white' key={hadith.chapter.id}>Chapter - {hadith.chapter.chapterEnglish}
                            </div>
                            <div key={hadith.id} className='flex flex-row w-[80%] border border-gray-300 rounded-lg overflow-hidden'>

                                <div className='w-1/2 bg-backgroundb text-center'>
                                    <ul>
                                        <li>
                                            {hadith.hadithEnglish}
                                        </li>
                                    </ul>
                                </div>
                                <div className='w-1/2 text-lg bg-foreground text-center'>
                                    <ul>
                                        <li>
                                            {hadith.hadithArabic}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )) : (<p>Data Not Loaded</p>)

            }

        </div>
    )
}

export default Display