import { CSSProperties } from "react";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "plugin-button": {
                appearance?: string;
                style?: CSSProperties;
                onClick?: any;
                children?: React.ReactNode;
            };
            "plugin-checkbox": {
                checked?: boolean;
                style?: CSSProperties;
                onChange?: any;
                children?: React.ReactNode;
            };
            "plugin-divider": {
                style?: CSSProperties;
            };
            "plugin-tab": {
                id: string;
                children?: React.ReactNode;
            };
            "plugin-tab-panel": {
                id: string;
                children?: React.ReactNode;
            };
            "plugin-tabs": {
                activeid: string;
                children?: React.ReactNode;
            };
            "td-drawer": {
                key?: string;
                expanded?: boolean;
                name: string;
                children?: React.ReactNode;
            };
            "td-swatch": {
                key?: string;
                type?: string;
                circular?: boolean;
                value: string | "none";
                orientation?: "horizontal" | "vertical";
                label?: string;
                children?: React.ReactNode;
                title?: string;
                onClick?: any;
                interactive?: boolean;
                selected?: boolean;
            };
            "td-corner-radius": {
                key?: string;
                value: string;
                children?: React.ReactNode;
                orientation?: "horizontal" | "vertical";
                onClick?: any;
                interactive?: boolean;
                selected?: boolean;
            };
            "td-generic-recipe": {
                key?: string;
                value: string;
                icon?: string;
                children?: React.ReactNode;
                orientation?: "horizontal" | "vertical";
                onClick?: any;
                interactive?: boolean;
                selected?: boolean;
            };
        }
    }
}
