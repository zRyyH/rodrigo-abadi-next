"use client";

import SettingsForm from "@/components/forms/settings/SettingsForm";
import FormManager from "@/components/forms/FormManager";
import { originsService } from "@/services/origins";

export default function OriginPage() {
    return (
        <div className="animate-fadeSlideIn" >
            <FormManager
                queryKey="origins"
                queryFn={originsService.getById}
                createFn={originsService.create}
                updateFn={originsService.update}
                redirectTo="/origins"
                initialData={{ origin: "" }}
            >
                <SettingsForm keyName={"origin"} title={"Origem"}/>
            </FormManager>
        </div>
    );
}