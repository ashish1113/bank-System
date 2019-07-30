import { BankListModule } from './bank-list.module';

describe('BankListModule', () => {
  let bankListModule: BankListModule;

  beforeEach(() => {
    bankListModule = new BankListModule();
  });

  it('should create an instance', () => {
    expect(bankListModule).toBeTruthy();
  });
});
