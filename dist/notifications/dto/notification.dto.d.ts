export declare class createNotificationDto {
    title: string;
    message: String;
    read: Boolean;
    createdAt: Date;
}
declare const updateNotificationDto_base: import("@nestjs/mapped-types").MappedType<Partial<createNotificationDto>>;
export declare class updateNotificationDto extends updateNotificationDto_base {
}
export {};
