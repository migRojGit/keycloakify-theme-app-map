/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { type KcContext, KcPage } from "./keycloak-theme/kc.gen";
import './assets/scss/globals.css'

// The following block can be uncommented to test a specific page with `yarn dev`
// Don't forget to comment back or your bundle size will increase

import { getKcContextMock } from "./keycloak-theme/login/KcPageStory";
import { BackgroundBeams } from "./components/BackgroundBeams";

if (import.meta.env.DEV) {
    window.kcContext = getKcContextMock({
        pageId: "login.ftl",
        overrides: {
            locale: {
                currentLanguageTag: "es"
            },
            client:{
                clientId: "app-map",
                name: "Application Map",
            },
            social: {
                displayInfo: true,
                providers: [
                    {
                        providerId: "google",
                        displayName: "Google",
                        alias: "google",
                    },
                    {
                        providerId: "gitlab",
                        displayName: "GitLab",
                        alias: "gitlab",
                        
                    }
                ]
            },
            realm: {
              name: "Application Map",
              displayName: "Application Map",
              displayNameHtml: "Confuturo-SSO-QA",
              internationalizationEnabled: false,
              registrationEmailAsUsername: false,
              loginWithEmailAllowed: true,
              rememberMe: true,
              registrationAllowed: false,
              resetPasswordAllowed: false,
        },
        themeVersion: "a1.0.0",
        
    },
});
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {!window.kcContext ? (
            <h1>No Keycloak Context</h1>
        ) : (
            <>
              <KcPage kcContext={window.kcContext} />
              <BackgroundBeams />
              {/* <Vortex /> */}
            </>
        )}
    </StrictMode>
);
declare global {
  interface Window {
      kcContext?: KcContext;
  }
}