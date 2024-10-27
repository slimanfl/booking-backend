import { PartialType } from '@nestjs/mapped-types';

import { createEventDto } from './CreateEventDto.dto';

export class updateEventDto extends PartialType(createEventDto) {}
