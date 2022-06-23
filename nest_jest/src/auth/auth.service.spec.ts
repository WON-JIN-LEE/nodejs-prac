import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
     const signIn = service.signIn({
       email: '1111@test.com',
       password: '1234',
     });
    expect(signIn).toBeInstanceOf(Object);
  });
});
