"use client";

import SettingsForm from "@/components/forms/settings/SettingsForm";
import FormManager from "@/components/forms/FormManager";
import { packagesService } from "@/services/packages";

export default function PackagesPage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="packages"
                queryFn={packagesService.getById}
                createFn={packagesService.create}
                updateFn={packagesService.update}
                redirectTo="/packages"
                initialData={{ type_of_packaging: "" }}
            >
                <SettingsForm keyName={"type_of_packaging"} title={"Embalagem"} />
            </FormManager>
        </div>
    );
}