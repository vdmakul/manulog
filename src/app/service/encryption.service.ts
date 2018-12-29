import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encrypt(data: string, password: string): string {
    var ciphertext = CryptoJS.AES.encrypt(data, password);
    return ciphertext.toString();
  }

  decrypt(encrypted: string, password: string): string {
    var bytes  = CryptoJS.AES.decrypt(encrypted, password);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
