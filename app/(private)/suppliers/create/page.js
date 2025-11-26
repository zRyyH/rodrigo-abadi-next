"use client";

import SettingsForm from "@/components/forms/settings/SettingsForm";
import FormManager from "@/components/forms/FormManager";
import { suppliersService } from "@/services/suppliers";

export default function PackagesPage() {
    return (
        <div className="animate-fadeSlideIn">
            <FormManager
                queryKey="suppliers"
                queryFn={suppliersService.getById}
                createFn={suppliersService.create}
                updateFn={suppliersService.update}
                redirectTo="/suppliers"
                initialData={{ supplier_name: "" }}
            >
                <SettingsForm keyName={"supplier_name"} title={"Fornecedor"} />
            </FormManager>
        </div>
    );
}