import type { StorageMapper } from '@shared/data/browserStorage/StorageMapper';
import type { CartItem } from '@cart/types';

class CartStorageMapper implements StorageMapper<CartItem[]> {
  fromJson(json: CartItem[]): CartItem[] {
    return json;
  }

  toJson(item: CartItem[]): CartItem[] {
    return item;
  }
}

export default CartStorageMapper;
