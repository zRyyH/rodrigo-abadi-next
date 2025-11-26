"use client";

import { UploadIcon, CheckCircle2Icon, FileSpreadsheetIcon, FileArchiveIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const fileInputs = [
    {
        id: "sales",
        label: "Vendas XLSX",
        description: "Arquivo de vendas em formato Excel",
        accept: ".xlsx",
        icon: FileSpreadsheetIcon,
    },
    {
        id: "nfes",
        label: "NFEs XLSX",
        description: "Notas fiscais eletrônicas em Excel",
        accept: ".xlsx",
        icon: FileSpreadsheetIcon,
    },
    {
        id: "xml",
        label: "XML ZIP",
        description: "Arquivos XML compactados",
        accept: ".zip",
        icon: FileArchiveIcon,
    },
    {
        id: "pdf",
        label: "PDF ZIP",
        description: "Arquivos PDF compactados",
        accept: ".zip",
        icon: FileArchiveIcon,
    },
];

export default function FilesForm({
    formData = {},
    setFormData,
    onSubmit,
    loading = false
}) {
    const handleFileChange = (fileId, file) => {
        setFormData({ ...formData, [fileId]: file });
    };

    return (
        <Card className="shadow-lg">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Upload de Arquivos</CardTitle>
                <CardDescription>
                    Selecione os arquivos necessários para processamento
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid gap-4">
                        {fileInputs.map((input) => {
                            const Icon = input.icon;
                            const hasFile = formData[input.id];

                            return (
                                <div key={input.id} className="space-y-2">
                                    <Label htmlFor={input.id} className="text-sm font-medium">
                                        {input.label}
                                    </Label>
                                    <label
                                        htmlFor={input.id}
                                        className={cn(
                                            "group relative flex items-center gap-4 rounded-lg border-2 border-dashed px-4 py-4 cursor-pointer transition-all",
                                            hasFile
                                                ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                                                : "border-muted-foreground/25 hover:border-primary hover:bg-muted/50",
                                            loading && "pointer-events-none opacity-60"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                                                hasFile
                                                    ? "bg-green-500 text-white"
                                                    : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                            )}
                                        >
                                            {hasFile ? (
                                                <CheckCircle2Icon className="size-5" />
                                            ) : (
                                                <Icon className="size-5" />
                                            )}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-medium">
                                                    {hasFile ? formData[input.id].name : "Selecionar arquivo"}
                                                </p>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                {hasFile
                                                    ? `${(formData[input.id].size / 1024).toFixed(1)} KB`
                                                    : input.description}
                                            </p>
                                        </div>

                                        {hasFile && (
                                            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500">
                                                <CheckCircle2Icon className="size-4 text-white" />
                                            </div>
                                        )}

                                        <input
                                            id={input.id}
                                            type="file"
                                            accept={input.accept}
                                            className="hidden"
                                            onChange={(e) => handleFileChange(input.id, e.target.files?.[0])}
                                            disabled={loading}
                                        />
                                    </label>
                                </div>
                            );
                        })}
                    </div>

                    <Button type="submit" className="w-full h-11 text-base font-medium" disabled={loading} size="lg">
                        {loading ? (
                            <>
                                <Spinner className="size-5" />
                                Processando...
                            </>
                        ) : (
                            <>
                                <UploadIcon className="size-5" />
                                Fazer Upload
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}