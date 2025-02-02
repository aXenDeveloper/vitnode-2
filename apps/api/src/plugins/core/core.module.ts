import { Module } from '@nestjs/common';

import { UsersCoreModule } from './users/users.module';

@Module({
  imports: [UsersCoreModule],
})
export class CoreModule {}
