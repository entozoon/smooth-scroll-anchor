export declare const smoothScroll: (element: HTMLElement, options: any) => void;
export declare const smoothScrollAnchor: ({ behaviour }: {
    behaviour?: "smooth" | "auto" | undefined;
}, { block }: {
    block?: "start" | "center" | "end" | "nearest" | undefined;
}, { offset }: {
    offset?: number | undefined;
}) => void;
