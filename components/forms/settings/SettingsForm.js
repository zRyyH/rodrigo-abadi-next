"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormActions from "@/components/forms/inputs/Submit";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsForm({
    title,
    formData = {},
    setFormData,
    onSubmit,
    onCancel,
    loading = false,
    keyName,
    mode = "create"
}) {
    const isEditMode = mode === "edit";

    const handleChange = (value) => {
        setFormData({ ...formData, [keyName]: value });
        console.log("formData", formData)
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{isEditMode ? `Editar ${title}` : `Criar ${title}`}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor={keyName}>
                            {title}<span className="text-destructive">*</span>
                        </Label>
                        <Input
                            id={keyName}
                            placeholder={`Digite a ${title}...`}
                            value={formData[keyName] || ""}
                            onChange={(e) => handleChange(e.target.value)}
                            disabled={loading}
                            required
                        />
                    </div>

                    <FormActions
                        onSubmit={onSubmit}
                        onCancel={onCancel}
                        isEditMode={isEditMode}
                        loading={loading}
                    />
                </div>
            </CardContent>
        </Card>
    );
}