import { IsInt, IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class Task {
    @IsInt()
    @IsOptional()
    id: number;

    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsOptional()
    description;

    @IsOptional()
    @IsDate()
    @IsNotEmpty()
    createdOn;
}