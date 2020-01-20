export declare class MessageResolver {
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
