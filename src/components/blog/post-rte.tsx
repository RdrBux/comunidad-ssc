'use client'

import { useState } from "react"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';

export default function PostRTE() {
	const [value, setValue] = useState<any>()
	console.log(value)

	return <div className="max-w-2xl"><ReactQuill theme="snow" value={value} onChange={setValue} /></div>
}