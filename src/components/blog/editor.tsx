'use client'

// Importing helper modules
import { useCallback, useMemo, useRef, useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles
import "react-quill/dist/quill.snow.css";
import styles from "./editor.module.css";
import ReactQuill from "react-quill";

export default function Editor() {
	// Editor state
	const [value, setValue] = useState("");

	// Editor ref
	const quill = useRef(null) as any;

	// Handler to handle button clicked
	function handler() {
		console.log(value);
	}

	const imageHandler = useCallback(() => {
		// Create an input element of type 'file'
		const input = document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.click();


		// When a file is selected
		input.onchange = () => {
			if (!input.files) return;

			const file = input.files[0];
			const reader = new FileReader();

			// Read the selected file as a data URL
			reader.onload = () => {
				const imageUrl = reader.result;
				const quillEditor = quill.current.getEditor();

				// Get the current selection range and insert the image at that index
				const range = quillEditor.getSelection(true);
				quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
			};

			reader.readAsDataURL(file);
		};
	}, []);

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [2, 3, 4, false] }],
					["bold", "italic", "underline", "blockquote"],
					[{ color: [] }],
					[
						{ list: "ordered" },
						{ list: "bullet" },
						{ indent: "-1" },
						{ indent: "+1" },
					],
					["link", "image"],
					["clean"],
				],
				handlers: {
					image: imageHandler,
				},
			},
			clipboard: {
				matchVisual: true,
			},
		}),
		[imageHandler]
	);

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"color",
		"clean",
	];

	return (
		<div>
			<ReactQuill
				ref={(el) => {
					if (el) {
						quill.current = el;
					}
				}}
				className={styles.editor}
				id="editor"
				theme="snow"
				value={value}
				formats={formats}
				modules={modules}
				onChange={(value) => setValue(value)}
			/>

			<button onClick={handler} className="mt-12 px-6 py-2 bg-neutral-950 text-tertiary-50 rounded-md">
				Submit
			</button>
		</div>
	);
};