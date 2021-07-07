import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import key from 'src/config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(
      key.mongoURI
    ),
  ],
})
export class DatabaseModule {}
