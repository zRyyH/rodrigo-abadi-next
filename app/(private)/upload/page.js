"use client";

import FormManager from "@/components/forms/FormManager";
import FilesForm from "@/components/forms/FilesForm";
import { filesService } from "@/services/files";

export default function UploadFiles() {
    return (
        <div className="gap-4 flex flex-col animate-fadeSlideIn">
            <FormManager
                queryKey="files"
                createFn={filesService.upload}
                redirectTo="/products"
                initialData={{
                    sales: null,
                    nfes: null,
                    xml: null,
                    pdf: null
                }}
            >
                <FilesForm />
            </FormManager>
        </div>
    );
}