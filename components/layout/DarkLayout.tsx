import { FC, PropsWithChildren } from "react"


export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: '#c743434c',
                borderRadius: '5px',
                padding: '10px',
            }}
        >
            <h3>Dark Layout</h3>
            {children}
        </div>
    )
}
