import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CoreModule } from './plugins/core/core.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'public'),
      serveRoot: '/public/',
      serveStaticOptions: {
        cacheControl: true,
        maxAge: 31536000,
      },
    }),
    CoreModule,
  ],
})
export class AppModule {}
