
"use client"; 

import {useState} from "react";

export default function UploadForm() {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit  = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("file",file as Blob);

        const response = await fetch("api/file",{
            method:"POST",
            body: formData
        });
    };

    const styles = {
        form: 'p-4 rounded-lg',
        input: 'border p-2 mb-4 w-full border-gray-300 rounded',
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                className={styles.input}
                type="file"
                onChange={(e)=> setFile(e.target.files?.item(0) || null)}
            ></input>
            <button type="submit">Upload</button>
        </form>
    )

}