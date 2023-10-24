import Storage from '@shared/data/browserStorage/Storage';
import CartStorageMapper from '@shared/data/storage/CartStorageMapper';
import { useEffect, useState } from 'react';
import { useRouterNavigate } from '@shared/hooks/router/useRouterNavigate';
import { Stack } from '@layout/mixins';
import { ProductOrderWrapper, ProductQuantityForm, TotalPrice } from '../styles';
import { Button } from '@layout/components/Button';
import { Hidden } from '@layout/mixins';
import { formatNumberToCKoreanCurrency } from '@shared/utils/number';
import type { CartItem } from '@cart/types';
import type { ProductOptionData } from '../types';

interface ProductOrderProps {
  option?: ProductOptionData;
  productId: number;
}

export const ProductOrder = ({ option, productId }: ProductOrderProps) => {
  const storage = new Storage('PRODUCTS_CART', new CartStorageMapper());
  const productItems = storage.get();
  const isItemOrdered = productItems ? productItems.some((item) => item.optionId === option?.id) : false;
  const defaultAmount = option ? option.price * option.stock : 0;
  const [quantity, setQuantity] = useState<number>(1);
  const [amount, setAmount] = useState<number>(defaultAmount);
  const moveToCartPage = useRouterNavigate({ to: `/cart` });

  useEffect(() => {
    setQuantity(1);
    if (option) {
      setAmount(option.price * 1);
    }
  }, [option]);

  if (!option) {
    return null;
  }

  const { name, price, stock, id } = option;

  const setAmountAndQuantity = (amount: number) => {
    const calculatedAmount = amount * price;
    if (amount > stock) {
      alert('재고가 부족합니다.');
      setQuantity(0);
      setAmount(0);
      return;
    }
    setQuantity(amount);
    setAmount(calculatedAmount);
  };

  const handleQuantityKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    setAmountAndQuantity(Number(key));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setAmountAndQuantity(Number(value));
  };

  const setProductToCart = (cartItems: CartItem[] | null) => {
    const newCartItem = { optionId: id, quantity, productId: productId };
    const updatedCartItems = cartItems ? [...cartItems, newCartItem] : [newCartItem];
    storage.set(updatedCartItems);
  };
  return (
    <ProductOrderWrapper>
      <Stack>
        <h3>선택된 상품</h3>
        <ProductQuantityForm>
          <p>{name}</p>
          <Hidden>
            <label htmlFor="quantity">수량</label>
          </Hidden>
          <input
            id="quantity"
            placeholder="수량을 입력하세요"
            disabled={isItemOrdered}
            min={1}
            max={stock}
            type="number"
            value={quantity}
            onKeyUp={handleQuantityKeyUp}
            onChange={handleQuantityChange}
          />
        </ProductQuantityForm>
        <TotalPrice>
          <strong>{`${formatNumberToCKoreanCurrency(amount)} 원`}</strong>
        </TotalPrice>
        <Button
          disabled={isItemOrdered || quantity === 0}
          onClick={() => {
            alert('주문이 완료되었습니다.');
            setProductToCart(productItems);
            moveToCartPage();
          }}
        >
          주문하기
        </Button>
      </Stack>
    </ProductOrderWrapper>
  );
};
