export declare const smoothScroll: (element: HTMLElement, options?: any) => void;
export declare const smoothScrollAnchor: ({ behaviour, block, offset, anchorQuerySelector, }: {
    behaviour?: "smooth" | "auto" | undefined;
    block?: "start" | "center" | "end" | "nearest" | undefined;
    offset?: number | undefined;
    anchorQuerySelector?: string | undefined;
}) => void;
