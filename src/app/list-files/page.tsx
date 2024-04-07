import DeleteUploadedFile from "@/components/deleteUploadedFile";
import { list } from "@vercel/blob";
import Image from "next/image";

export default async function GetAllUploadedFiles() {
    const blobs = await list();

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Uploaded Files</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-black text-white">
                            <th className="px-4 py-2">File</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blobs.blobs.map((blob, i) => (
                            <tr key={blob.pathname + i} className={i % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                                <td className="px-4 py-2">
                                    <a href={blob.url} target="_blank" className="flex items-center space-x-2">
                                        <div className="w-16 h-16">
                                            <Image
                                                src={blob.url}
                                                alt={blob.pathname}
                                                width={64}
                                                height={64}
                                                className="rounded-full"
                                            />
                                        </div>
                                        <span className="text-gray-800">{blob.pathname}</span>
                                    </a>
                                </td>
                                <td className="px-4 py-2">
                                    <DeleteUploadedFile url={blob.url} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
