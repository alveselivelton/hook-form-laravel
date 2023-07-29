import "react-quill/dist/quill.snow.css";
import { modules, formats } from "@/config/quillConfig";
import ReactQuill from "react-quill";

type QuildEditorProps = {
    value?: string;
    onChange: (content: string, delta: any, source: any, editor: any) => void;
    label: string;
    error?: string;
};

export const QuillEditor = ({
    value,
    onChange,
    label,
    error,
}: QuildEditorProps) => {
    return (
        <div className="flex flex-col gap-3 mb-4">
            <label htmlFor="description">{label}</label>
            <ReactQuill
                defaultValue={value}
                theme="snow"
                modules={modules}
                formats={formats}
                onChange={onChange}
                placeholder="Escreva algo..."
            />
            {error && <p className="text-red-600">{error}</p>}
        </div>
    );
};
