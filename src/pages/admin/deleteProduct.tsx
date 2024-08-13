import Loading from "@/components/Loading";
import MinimalLoading from "@/components/MinimalLoading";
import { notify } from "@/lib/notify";
import { Product } from "@/lib/types";
import { deleteProductFromDb, getProducts } from "@/server/product";
import {
  DeleteButton,
  DeleteCardList,
  DeleteProductCardWrapper,
} from "@/styles/Admin";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Image from "next/image";

const DeleteProduct = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteProductFromDb(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
      notify("Ürün başarıyla silindi.", "success");
    },
    onError: () => {
      notify("Ürün silinirken bir hata oluştu.", "error");
    },
  });

  if (productsLoading) return <Loading />;

  return (
    <DeleteCardList>
      {products.map((product: Product) => (
        <DeleteProductCardWrapper key={product.id}>
          <Image
            src={
              product.images[0].startsWith("http")
                ? product.images[0]
                : `/images/products/${product.images[0]}`
            }
            alt={product.images[0]}
            width={150}
            height={100}
            priority
          />
          <h3>{product.name}</h3>
          <p>{product.price} TL</p>
          <DeleteButton onClick={() => mutate(product.id)}>
            {isPending ? <MinimalLoading /> : "Ürünü Sil"}
          </DeleteButton>
        </DeleteProductCardWrapper>
      ))}
    </DeleteCardList>
  );
};

export default DeleteProduct;

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
