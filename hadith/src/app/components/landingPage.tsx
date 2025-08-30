'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

const LandingPage = () => {
    const [books, setBooks] = useState<any[]>([])
    const router = useRouter();
    const BASE_URL = 'https://hadithapi.com/api/books?apiKey=$2y$10$w78rfk0k4Lu1AoTsmIE4TFXfKWP2EOTNuTSC2frcH3qyCoXUYtf2'

    const fetchData = async () => {
        const res = await fetch(BASE_URL);
        const resData = await res.json();
        setBooks(resData.books);
    }

    useEffect(() => {
        fetchData();
    }, [BASE_URL])
    return (
        <div>
            <h1 className="mt-4 text-white text-2xl">The Hadith Of the Prophet Muhammad</h1>
            {books.length > 0 ?
                (<div>
                    {
                        books.map((book) => (
                            <div key={book.id}
                                className="mt-2 p-2 bg-gray-300 rounded-lg cursor-pointer"
                                onClick={() => router.push(`/books/${book.bookSlug}`)}>{book.bookName}
                            </div>
                        ))
                    }
                </div>
                ) : (<p>No Data Found</p>)}
        </div>
    )
}

export default LandingPage