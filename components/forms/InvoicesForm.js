"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SelectSmart from "@/components/forms/inputs/Select";
import FormActions from "@/components/forms/inputs/Submit";
import LabeledInput from "@/components/forms/inputs/Input";
import { originsService } from "@/services/origins";
import { FieldGroup } from "@/components/ui/field";

export default function InvoicesForm({
    formData = {},
    setFormData,
    onSubmit,
    onCancel,
    loading = false,
    mode = "create"
}) {
    const isEditMode = mode === "edit";

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>CRIAR NOTAS</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <FieldGroup>
                        <LabeledInput
                            id="product_name"
                            label="NOME DO PRODUTO"
                            placeholder="DIGITE O NOME DO PRODUTO..."
                            value={formData.product_name || ""}
                            onChange={(value) => handleChange("product_name", value)}
                            required
                        />

                        <LabeledInput
                            id="quantity"
                            label="QUANTIDADE"
                            placeholder="DIGITE A QUANTIDADE..."
                            value={formData.quantity || ""}
                            onChange={(value) => handleChange("quantity", value)}
                            required
                        />

                        <SelectSmart
                            label="ORIGEM"
                            placeholder="SELECIONAR ORIGEM..."
                            queryKey="origins"
                            service={originsService.getAll}
                            value={formData.origin_id}
                            onValueChange={(e) => handleChange("origin_id", e)}
                            valueKey="id"
                            labelKey="origin"
                            required
                            id="origin-select"
                        />

                        <LabeledInput
                            id="ncm"
                            label="NCM"
                            placeholder="DIGITE O NCM..."
                            value={formData.ncm || ""}
                            onChange={(value) => handleChange("ncm", value)}
                            required
                        />

                        <LabeledInput
                            id="cest"
                            label="CEST"
                            placeholder="DIGITE O CEST..."
                            value={formData.cest || ""}
                            onChange={(value) => handleChange("cest", value)}
                            required
                        />
                    </FieldGroup>

                    <FormActions
                        loading={loading}
                        isEditMode={isEditMode}
                        onCancel={onCancel}
                    />
                </form>
            </CardContent>
        </Card>
    );
}