"use client";

import FormManager from "@/components/forms/FormManager";
import InvoicesForm from "@/components/forms/InvoicesForm";
import { invoicesService } from "@/services/invoices";

export default function InvoicePage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="invoices"
                queryFn={invoicesService.getById}
                createFn={invoicesService.create}
                updateFn={invoicesService.update}
                redirectTo="/invoices"
                initialData={{ product_name: "", quantity: "", ncm: "", cest: "", origin_id: "" }}
            >
                <InvoicesForm mode="edit" />
            </FormManager>
        </div>
    );
}