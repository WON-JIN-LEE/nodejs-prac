import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardsModule } from './boards/boards.module';

@Module({
    imports: [BoardsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
