import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import { CartButton } from '../CartButton'
import {
  CartClose,
  CartContent,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinalizationDetails,
} from './styles'

const imageUrl =
  'https://files.stripe.com/links/MDB8YWNjdF8xTVN0NkRJbDhOTlBiRzEzfGZsX3Rlc3RfZ1pPVVAzVTlibHJtbE5UMnFISkNYRjZq00VPsj3Nzp'

export const Cart = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <CartButton />
    </Dialog.Trigger>

    <Dialog.Portal>
      <CartContent>
        <CartClose>
          <X size={24} weight="bold" />
        </CartClose>

        <h2>Sacola de compras</h2>

        <section>
          {/* <p>Parece que seu carrinho está vazio :(</p> */}

          {[...Array(3)].map((item) => (
            <CartProduct key={String(item)}>
              <CartProductImage>
                <Image width={95} height={95} alt="" src={imageUrl} />
              </CartProductImage>

              <CartProductDetails>
                <div>
                  <p>Nome do Produto</p>
                  <strong>R$ 74,90</strong>
                </div>

                <button type="button">Remover</button>
              </CartProductDetails>
            </CartProduct>
          ))}
        </section>

        <FinalizationDetails>
          <div>
            <span>Quantidade</span>
            <p>3 itens</p>
          </div>
          <div>
            <span>Valor total</span>
            <p>R$ 224,70</p>
          </div>

          <button type="button">Finalizar compra</button>
        </FinalizationDetails>
      </CartContent>
    </Dialog.Portal>
  </Dialog.Root>
)
