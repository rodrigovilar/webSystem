export const FRONT_URL = "http://localhost/";
export const BACK_URL = "http://localhost/api/";
export const BOOK_URL = "books";
export const SLASH_BOOK_URL = "/" + BOOK_URL;
export const BOOK_SLASH_URL = BOOK_URL + "/";

export function showUrl(resource: string, id: number): string[]{
    return ["/" + resource, 'view', id.toString()];
}

export function editUrl(resource: string, id: number): string[]{
    return ["/" + resource, 'edit', id.toString()];
}

export function listUrl(resource: string): string[]{
    return ["/" + resource];
}

export function createUrl(resource: string): string[] {
    return ["/" + resource, "create"];
}
