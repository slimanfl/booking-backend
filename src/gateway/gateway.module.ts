import { Module } from '@nestjs/common';
import { MyGateWay } from './gateway';

@Module({
  providers: [MyGateWay],
})
export class GateWayModule {}
