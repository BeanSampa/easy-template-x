import { XmlTextNode } from "../xmlNode";

export enum TokenType {
    Empty = "Empty",
    /**
     * The token contains at least one delimiter.
     */
    Delimiter = "Delimiter",
    /**
     * Arbitrary text. Can be part of a template tag, or non-related.
     */
    Text = "Text"
}

export interface DelimiterMark {
    index: number;
    isOpen: boolean;
}

export class TemplateToken {
    public type: TokenType;
    public delimiters: DelimiterMark[] = [];
    public xmlTextNode: XmlTextNode;

    constructor(initial?: Partial<TemplateToken>) {
        Object.assign(this, initial);
    }
}