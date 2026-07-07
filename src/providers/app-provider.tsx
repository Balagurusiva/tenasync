"use client";

import { ReactNode } from "react";
import QueryProvider from "./query-provider";
import { ToastProvider } from "./toast-provider";
import { ReduxProvider } from "./redux-provider";
import { ThemeProvider } from "./theme-provider";
// import ReduxProvider from "./redux-provider";
// import ThemeProvider from "./theme-provider";

interface AppProviderProps {
    children: ReactNode;
}

export default function AppProvider({
    children,
}: AppProviderProps) {
    return (
        <QueryProvider>
            <ReduxProvider>
                <ThemeProvider>
                    <ToastProvider />
                    {children}
                </ThemeProvider>
            </ReduxProvider>
        </QueryProvider>
    );
}