import { KcContext } from "keycloakify/login/KcContext";

export const CustomHeader = (kcContext: KcContext) => {
    const {  client  } = kcContext;


    return (
        <div className="custom-header">
            { `${ client.name }` }
        </div>
    );
}