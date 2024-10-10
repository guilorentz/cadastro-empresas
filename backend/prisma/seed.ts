import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const companies = [
    {
      name: 'Company One',
      cnpj: '53537973000120',
      address: '123 Main St',
      phone: '12345678901',
      email: 'contact@companyone.com',
    },
    {
      name: 'Company Two',
      cnpj: '11385038000146',
      address: '456 Second St',
      phone: '10987654321',
      email: 'contact@companytwo.com',
    },
    {
      name: 'Company Three',
      cnpj: '43469675000197',
      address: '789 Third St',
      phone: '11223344556',
      email: 'contact@companythree.com',
    },
    {
      name: 'Company Four',
      cnpj: '12322672000100',
      address: '1011 Fourth St',
      phone: '22334455667',
      email: 'contact@companyfour.com',
    },
    {
      name: 'Company Five',
      cnpj: '41364963000151',
      address: '1213 Fifth St',
      phone: '33445566778',
      email: 'contact@companyfive.com',
    },
    {
      name: 'Company Six',
      cnpj: '23602396000142',
      address: '1415 Sixth St',
      phone: '44556677889',
      email: 'contact@companysix.com',
    },
    {
      name: 'Company Seven',
      cnpj: '23142219000120',
      address: '1617 Seventh St',
      phone: '55667788990',
      email: 'contact@companyseven.com',
    },
    {
      name: 'Company Eight',
      cnpj: '69397306000120',
      address: '1819 Eighth St',
      phone: '66778899001',
      email: 'contact@companyeight.com',
    },
    {
      name: 'Company Nine',
      cnpj: '67416668000195',
      address: '2021 Ninth St',
      phone: '77889900112',
      email: 'contact@companynine.com',
    },
    {
      name: 'Company Ten',
      cnpj: '39968270000126',
      address: '2223 Tenth St',
      phone: '88990011223',
      email: 'contact@companyten.com',
    },
  ];

  for (const company of companies) {
    await prisma.company.create({
      data: company,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
