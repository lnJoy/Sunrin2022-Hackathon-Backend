import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsLatitude, IsLongitude, IsOptional } from "class-validator";
import { CreateLocationDto } from "./create-location.dto";

export class UpdateLocationDto extends PartialType(CreateLocationDto) {
  @ApiProperty({
    description: '실종 위치'
  })
  @IsOptional()
  @IsLatitude()
  lat: number;

  @ApiProperty({
    description: '실종 날짜 ex) 2022-07-15'
  })
  @IsOptional()
  @IsLongitude()
  lng: number;
}