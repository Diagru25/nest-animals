import { ResidencesModule } from './modules/residences/residences.module';
import { Module } from '@nestjs/common';
import { AnimalsModule } from './modules/animals/animals.module';
import { DatabaseModule } from './modules/database/database.module';
@Module({
  imports: [DatabaseModule, AnimalsModule, ResidencesModule],
})
export class AppModule {}
