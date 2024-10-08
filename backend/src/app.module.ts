import { Module } from '@nestjs/common';
import { CompaniesModule } from './companies/companies.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CompaniesModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
