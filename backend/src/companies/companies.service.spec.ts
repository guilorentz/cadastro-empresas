import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesService } from './companies.service';
import { PrismaService } from '../prisma/prisma.service';
import { Company } from '@prisma/client';

describe('CompaniesService', () => {
  let service: CompaniesService;
  let prisma: PrismaService;

  const mockCompany: Company = {
    id: 1,
    name: 'Test Company',
    cnpj: '12345678000195',
    address: '123 Test St',
    phone: '1234567890',
    email: 'test@test.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockPrismaService = {
    company: {
      findMany: jest.fn().mockResolvedValue([mockCompany]),
      findFirst: jest.fn().mockResolvedValue(mockCompany),
      findUnique: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue(mockCompany),
      update: jest.fn().mockResolvedValue(mockCompany),
      delete: jest.fn().mockResolvedValue(mockCompany),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CompaniesService>(CompaniesService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of companies', async () => {
      expect(await service.findAll()).toEqual([mockCompany]);
      expect(prisma.company.findMany).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a company by ID', async () => {
      expect(await service.findById(1)).toEqual(mockCompany);
      expect(prisma.company.findFirst).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
  });

  describe('create', () => {
    it('should create and return a company', async () => {
      const createCompanyDto = {
        name: 'Test Company',
        cnpj: '12345678000195',
        address: '123 Test St',
        phone: '1234567890',
        email: 'test@test.com',
      };
      expect(await service.create(createCompanyDto)).toEqual(mockCompany);
      expect(prisma.company.create).toHaveBeenCalledWith({
        data: createCompanyDto,
      });
    });

    it('should throw an error if CNPJ is already registered', async () => {
      const createCompanyDto = {
        name: 'Test Company',
        cnpj: '12345678000195',
        address: '123 Test St',
        phone: '1234567890',
        email: 'test@test.com',
      };
      jest.spyOn(prisma.company, 'findUnique').mockResolvedValue(mockCompany);
      await expect(service.create(createCompanyDto)).rejects.toThrow(
        'CNPJ is already registered',
      );
    });
  });

  describe('update', () => {
    it('should update and return a company', async () => {
      const updateCompanyDto = {
        name: 'Updated Test Company',
        cnpj: '12345678000195',
        address: '123 Updated St',
        phone: '1234567890',
        email: 'updated@test.com',
      };
      expect(await service.update(1, updateCompanyDto)).toEqual(mockCompany);
      expect(prisma.company.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateCompanyDto,
      });
    });
  });

  describe('delete', () => {
    it('should delete and return a company', async () => {
      expect(await service.delete(1)).toEqual(mockCompany);
      expect(prisma.company.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });
});
