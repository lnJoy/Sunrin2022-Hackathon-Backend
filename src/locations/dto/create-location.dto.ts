import { ApiProperty } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsNotEmpty } from "class-validator";

export class CreateLocationDto {
  @ApiProperty({
    description: '실종 위치'
  })
  @IsNotEmpty()
  @IsLatitude()
  lat: number;

  @ApiProperty({
    description: '실종 날짜 ex) 2022-07-15'
  })
  @IsNotEmpty()
  @IsLongitude()
  lng: number;
}