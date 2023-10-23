import type { StorageMapper } from '../browserStorage/StorageMapper';

interface CartItem {
  productId: number;
  quantity: number;
  optionId: number;
}

class CartStorageMapper implements StorageMapper<CartItem[]> {
  fromJson(json: CartItem[]): CartItem[] {
    return json;
  }

  toJson(item: CartItem[]): CartItem[] {
    return item;
  }
}

export default CartStorageMapper;
