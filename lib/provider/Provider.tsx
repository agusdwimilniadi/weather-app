
"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor, AppStore } from "@/lib/redux/store";

export default function ClientProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const storeRef = useRef<AppStore | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const persistorRef = useRef<any>(null);

    if (!storeRef.current) {
        storeRef.current = store;
        persistorRef.current = persistor;
    }

    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistorRef.current}>
                {children}
            </PersistGate>
        </Provider>
    );
}