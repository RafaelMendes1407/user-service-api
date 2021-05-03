import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Should refuse connection without a Bearer Token', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/documents (post)', () => {
    return request(app.getHttpServer())
      .post('/documents')
      .expect(200)
      .expect('Hello World!');
  });
});

// describe('Should Read a File', () => {
//   if()
// });
