import { TestBed } from '@angular/core/testing';
import { EncryptionService } from './encryption.service';

describe('EncryptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncryptionService = TestBed.get(EncryptionService);
    expect(service).toBeTruthy();
  });

  it('should encrypt and decrypt', () => {
    const service: EncryptionService = TestBed.get(EncryptionService);
    const encrypted = service.encrypt('value', 'password');
    const decrypted = service.decrypt(encrypted, 'password');
    expect(decrypted).toBe('value');
  });
});
