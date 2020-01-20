export declare class AppResolver {
    messages: {
        id: number;
        content: string;
    }[];
    getMessages(): {
        id: number;
        content: string;
    }[];
    findOneById(id: number): Promise<any>;
}
