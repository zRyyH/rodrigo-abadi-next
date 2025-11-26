"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingScreen } from "@/components/common/PageLoading";
import { FileText, FileCode, Package } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import Avatar from "@/components/common/Avatar";

export default function SaleView({
    product = {},
    sale_id = "",
    date = "",
    buyer_name = "",
    state = "",
    status_description = "",
    invoice_number = "",
    product_revenue = "",
    shipping_revenue = "",
    shipping_fees = "",
    sales_fee_and_taxes = "",
    total_amount = "",
    profit = "",
    pdf_url = "",
    xml_url = "",
    loading
}) {
    if (loading) return <LoadingScreen />

    const isPdfValid = pdf_url?.trim();
    const isXmlValid = xml_url?.trim();

    return (
        <div className="w-full p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Produto</h1>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = pdf_url}
                        disabled={!isPdfValid}
                        className="cursor-pointer"
                    >
                        <FileText />
                        PDF
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => window.location.href = xml_url}
                        disabled={!isXmlValid}
                        className="cursor-pointer"
                    >
                        <FileCode />
                        XML
                    </Button>
                </div>
            </div>

            {/* Product Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Produto</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-4">
                    <Avatar imagePath={product.imagePath} />
                    
                    <div className="flex-1 grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Nome</p>
                            <p className="text-sm font-medium">{product.name}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Valor</p>
                            <p className="text-sm font-medium">{product.value}</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Quantidade</p>
                            <p className="text-sm font-medium">{product.quantity}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Separator />

            {/* Sale Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Informações da Venda</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <InfoRow label="Número da venda" value={sale_id} />
                    <InfoRow label="Data" value={date} />
                    <InfoRow label="Apelido comprador" value={buyer_name} />
                    <InfoRow label="Dados de envio" value={state} />
                    <InfoRow label="Dados de envio" value={status_description} />
                    <InfoRow label="Número da nota fiscal" value={invoice_number} />
                </CardContent>
            </Card>

            {/* Financial Summary */}
            <Card>
                <CardHeader>
                    <CardTitle>Resumo Financeiro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <InfoRow label="Preço total dos produtos" value={product_revenue} />
                    <InfoRow label="Receita por envio" value={shipping_revenue} />
                    <InfoRow label="Custo envio" value={shipping_fees} />
                    <InfoRow label="Impostos e tarifas" value={sales_fee_and_taxes} />
                    <Separator />
                    <InfoRow label="Total" value={total_amount} bold />
                    <InfoRow label="Lucro" value={profit} bold />
                </CardContent>
            </Card>
        </div>
    );
}

function InfoRow({ label, value, bold = false }) {
    return (
        <div className="flex items-center justify-between py-1">
            <span className={`text-sm ${bold ? "font-semibold" : "text-muted-foreground"}`}>
                {label}
            </span>
            <span className={`text-sm ${bold ? "font-semibold" : "font-medium"}`}>
                {value}
            </span>
        </div>
    );
}