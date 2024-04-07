"use client";
import Image from "next/image";
import { useState } from "react";

export default function UploadForm() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [inProgress, setInProgress] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        setInProgress(true);
        e.preventDefault();

        const formData = new FormData();
        formData.append("file", file as Blob);

        const response = await fetch("api/file", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setPreview(data.url);
        setInProgress(false);
    };

    const formStyles = {
        form: 'p-4 rounded-lg shadow-md bg-white',
        input: 'border p-2 mb-4 w-full border-gray-300 rounded',
        button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        fileInput: 'bg-black',
    };

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <form onSubmit={handleSubmit} className={`${formStyles.form} w-96 p-8`}>
                <input
                    className={`${formStyles.input} ${formStyles.fileInput}`}
                    type="file"
                    onChange={(e) => setFile(e.target.files?.item(0) || null)}
                />
                <button type="submit" className={formStyles.button}>
                    {inProgress ? "Uploading..." : "Upload"}
                </button>
                {preview && (
                    <div className="mt-4">
                        <Image src={preview} alt="Uploaded File" width={200} height={200} />
                        <p className="bg-white text-black p-2">{file?.name}</p>
                    </div>
                )}
            </form>
        </div>
    );
}