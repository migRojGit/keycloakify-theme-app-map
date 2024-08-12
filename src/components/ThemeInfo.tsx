import { KcContext } from "keycloakify/login/KcContext"

interface Providers {
    alias       : string,
    displayName : string
    providerId  : string
}
interface kcContextWhitSocial {
    social:{
        displayInfo: boolean,
        providers: Providers[]
    }
}

export const ThemeInfo = (kcContext: KcContext) => {
    
    const kcContextWhitSocial = kcContext as kcContextWhitSocial
    const { social } = kcContextWhitSocial
    const alphaStatus: boolean = kcContext.themeVersion.includes('a')
    
    return (
        <>
            <div className="application-info">
                <h6>Ingreso por: </h6>
                <ul>
                    {  
                        social.displayInfo && social.providers.map((provider) => {
                            return (
                                <li key={provider.providerId}>{provider.displayName}</li>
                            )
                        })
                    }
                    {
                        !alphaStatus && <li>Acceso regular</li>
                    }
                </ul>
                <h6>Version theme {kcContext.themeVersion}</h6>
                <h6>Confuturo</h6>
            </div>
        </>
    )
}