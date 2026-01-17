"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ImageCarouselUpload from "@/components/forms/inputs/ImageCarouselUpload";
import SelectSmart from "@/components/forms/inputs/Select";
import FormActions from "@/components/forms/inputs/Submit";
import LabeledInput from "@/components/forms/inputs/Input";
import { suppliersService } from "@/services/suppliers";
import { packagesService } from "@/services/packages";

export default function ProductForm({
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
                <CardTitle>{isEditMode ? "Editar Produto" : "CRIAR PRODUTO"}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <LabeledInput
                                id="name"
                                label="NOME"
                                placeholder="DIGITE O NOME DO PRODUTO..."
                                value={formData.name || ""}
                                onChange={(value) => handleChange("name", value)}
                                required
                            />

                            <LabeledInput
                                id="sku"
                                label="SKU"
                                placeholder="DIGITE O SKU..."
                                value={formData.sku || ""}
                                onChange={(value) => handleChange("sku", value)}
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

                            <LabeledInput
                                id="purchase_cost"
                                label="CUSTO"
                                placeholder="DIGITE O CUSTO DO PRODUTO..."
                                value={formData.purchase_cost || ""}
                                onChange={(value) => handleChange("purchase_cost", value)}
                                required
                            />

                            <SelectSmart
                                label="EMBALAGEM"
                                placeholder="SELECIONAR EMBALAGEM..."
                                queryKey="packages"
                                service={packagesService.getAll}
                                value={formData?.package_id}
                                onValueChange={(e) => handleChange("package_id", e)}
                                valueKey="id"
                                labelKey="type_of_packaging"
                                required
                                id="package-id-select"
                            />

                            <SelectSmart
                                label="FORNECEDOR"
                                placeholder="SELECIONAR FORNECEDOR..."
                                queryKey="suppliers"
                                service={suppliersService.getAll}
                                value={formData?.supplier_id}
                                onValueChange={(e) => handleChange("supplier_id", e)}
                                valueKey="id"
                                labelKey="supplier_name"
                                required
                                id="supplier-name-select"
                            />

                            <LabeledInput
                                id="cest"
                                label="CEST"
                                placeholder="DIGITE O CEST..."
                                value={formData.cest || ""}
                                onChange={(value) => handleChange("cest", value)}
                                required
                            />

                            <LabeledInput
                                id="ncm"
                                label="NCM"
                                placeholder="DIGITE O NCM..."
                                value={formData.ncm || ""}
                                onChange={(value) => handleChange("ncm", value)}
                                required
                            />
                        </div>

                        <ImageCarouselUpload
                            images={formData.photo_ids || []}
                            onChange={(images) => handleChange("photo_ids", images)}
                        />
                    </div>

                    <FormActions onSubmit={onSubmit} onCancel={onCancel} isEditMode={isEditMode} loading={loading} />
                </div>
            </CardContent>
        </Card>
    );
}