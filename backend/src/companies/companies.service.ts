import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  async findById(id: number): Promise<Company> {
    return this.prisma.company.findFirst({
      where: { id },
    });
  }

  async create(data: CreateCompanyDto): Promise<Company> {
    const existingCompany = await this.prisma.company.findUnique({
      where: { cnpj: data.cnpj },
    });

    if (existingCompany) {
      throw new Error('CNPJ is already registered');
    }

    return this.prisma.company.create({ data });
  }

  async update(id: number, data: UpdateCompanyDto): Promise<Company> {
    const existingCompany = await this.prisma.company.findUnique({
      where: { cnpj: data.cnpj },
    });

    if (existingCompany && existingCompany.id !== id) {
      throw new Error('CNPJ is already registered');
    }

    return this.prisma.company.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Company> {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}
