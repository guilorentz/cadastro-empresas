import { Test, TestingModule } from '@nestjs/testing';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';
import { BadRequestException } from '@nestjs/common';

describe('CompaniesController', () => {
  let controller: CompaniesController;
  let service: CompaniesService;

  const mockCompaniesService = {
    findAll: jest.fn(() => []),
    findById: jest.fn((id: number) => ({ id, name: 'Test Company' })),
    create: jest.fn((dto: CreateCompanyDto) => ({ id: 1, ...dto })),
    update: jest.fn((id: number, dto: UpdateCompanyDto) => ({ id, ...dto })),
    delete: jest.fn((id: number) => ({ id })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [
        {
          provide: CompaniesService,
          useValue: mockCompaniesService,
        },
      ],
    }).compile();

    controller = module.get<CompaniesController>(CompaniesController);
    service = module.get<CompaniesService>(CompaniesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of companies', async () => {
      expect(await controller.findAll()).toEqual([]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a company by ID', async () => {
      const result = { id: 1, name: 'Test Company' };
      expect(await controller.findById('1')).toEqual(result);
      expect(service.findById).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create and return a company', async () => {
      const createCompanyDto: CreateCompanyDto = {
        name: 'Test Company',
        cnpj: '12345678000195',
        address: '123 Test St',
        phone: '1234567890',
        email: 'test@test.com',
      };
      expect(await controller.create(createCompanyDto)).toEqual({
        id: 1,
        ...createCompanyDto,
      });
      expect(service.create).toHaveBeenCalledWith(createCompanyDto);
    });

    it('should throw a BadRequestException if service create fails', async () => {
      const createCompanyDto: CreateCompanyDto = {
        name: 'Test Company',
        cnpj: '12345678000195',
        address: '123 Test St',
        phone: '1234567890',
        email: 'test@test.com',
      };
      jest
        .spyOn(service, 'create')
        .mockRejectedValue(new Error('Create error'));
      await expect(controller.create(createCompanyDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });

  describe('update', () => {
    it('should update and return a company', async () => {
      const updateCompanyDto: UpdateCompanyDto = {
        name: 'Updated Test Company',
        cnpj: '12345678000195',
        address: '123 Updated St',
        phone: '1234567890',
        email: 'updated@test.com',
      };
      expect(await controller.update('1', updateCompanyDto)).toEqual({
        id: 1,
        ...updateCompanyDto,
      });
      expect(service.update).toHaveBeenCalledWith(1, updateCompanyDto);
    });
  });

  describe('delete', () => {
    it('should delete and return a company', async () => {
      expect(await controller.delete('1')).toEqual({ id: 1 });
      expect(service.delete).toHaveBeenCalledWith(1);
    });
  });
});
