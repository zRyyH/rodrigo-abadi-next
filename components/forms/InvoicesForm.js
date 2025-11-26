"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { originsService } from "@/services/origins";
import { FieldGroup } from "@/components/ui/field";

import SelectSmart from "@/components/forms/inputs/Select";
import FormActions from "@/components/forms/inputs/Submit";
import LabeledInput from "@/components/forms/inputs/Input";

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
                <CardTitle>Criar Notas</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-6">
                    <FieldGroup>
                        <LabeledInput
                            id="product_name"
                            label="Nome do produto"
                            placeholder="Digite o nome do produto..."
                            value={formData.product_name || ""}
                            onChange={(value) => handleChange("product_name", value)}
                            required
                        />

                        <LabeledInput
                            id="quantity"
                            label="Quantidade"
                            placeholder="Digite a quantidade..."
                            value={formData.quantity || ""}
                            onChange={(value) => handleChange("quantity", value)}
                            required
                        />

                        <SelectSmart
                            label="Origem"
                            placeholder="Selecionar origem..."
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
                            placeholder="Digite o NCM..."
                            value={formData.ncm || ""}
                            onChange={(value) => handleChange("ncm", value)}
                            required
                        />

                        <LabeledInput
                            id="cest"
                            label="CEST"
                            placeholder="Digite o CEST..."
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