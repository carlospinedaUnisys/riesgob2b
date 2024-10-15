export interface PonderacionModel {
    vigencia?: date;
    version?: number;
    name?: string;
    peso?: number;
}

export interface Listas {
    id?: number;
    name?: string;
}

export interface ListaMaestra {
    id?: string;
    name?: string;
    alfa1?: string;
    alfa2?: string;
    num1?: number;
    num2?: number;
    bool1?: boolean;
    bool2?: boolean;
}

interface ColumnMeta {
    field: string;
    header: string;
}

interface Item {
    value: string;
    icon: string;
}