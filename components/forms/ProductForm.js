"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { suppliersService } from "@/services/suppliers";
import { packagesService } from "@/services/packages";
import ImageCarouselUpload from "@/components/forms/inputs/ImageCarouselUpload";
import SelectSmart from "@/components/forms/inputs/Select";
import FormActions from "@/components/forms/inputs/Submit";
import LabeledInput from "@/components/forms/inputs/Input";

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
                <CardTitle>{isEditMode ? "Editar Produto" : "Criar Produto"}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <LabeledInput
                                id="name"
                                label="Nome"
                                placeholder="Digite o nome do produto..."
                                value={formData.name || ""}
                                onChange={(value) => handleChange("name", value)}
                                required
                            />

                            <LabeledInput
                                id="sku"
                                label="SKU"
                                placeholder="Digite o SKU..."
                                value={formData.sku || ""}
                                onChange={(value) => handleChange("sku", value)}
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

                            <LabeledInput
                                id="purchase_cost"
                                label="Custo"
                                placeholder="Digite o custo do produto..."
                                value={formData.purchase_cost || ""}
                                onChange={(value) => handleChange("purchase_cost", value)}
                                required
                            />

                            <SelectSmart
                                label="Embalagem"
                                placeholder="Selecionar embalagem..."
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
                                label="Fornecedor"
                                placeholder="Selecionar fornecedor..."
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
                                placeholder="Digite o CEST..."
                                value={formData.cest || ""}
                                onChange={(value) => handleChange("cest", value)}
                                required
                            />

                            <LabeledInput
                                id="ncm"
                                label="NCM"
                                placeholder="Digite o NCM..."
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