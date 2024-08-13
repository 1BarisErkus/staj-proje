import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { addProductFromDb } from "@/server/product";
import { Product } from "@/lib/types";
import { notify } from "@/lib/notify";
import { categoryNames } from "@/lib/categoryNames";
import { Col, Container, Row } from "@/styles/GlobalVariables";
import BasicFeatures from "@/components/Admin/BasicFeatures";
import SalesFeatures from "@/components/Admin/SalesFeatures";
import OtherFeatures from "@/components/Admin/OtherFeatures";
import { Button, DeleteLink } from "@/styles/Admin";
import MinimalLoading from "@/components/MinimalLoading";

const getCategoryKeyByValue = (value: string): string | undefined => {
  const entry = Object.entries(categoryNames).find(
    ([key, val]) => val === value
  );
  return entry ? entry[0] : undefined;
};

const schema = z.object({
  name: z
    .string()
    .min(3, "Ürün adı en az 3 karakter olmalıdır.")
    .max(50, "Ürün adı en fazla 50 karakter olabilir.")
    .regex(
      /^[a-zA-Z0-9\s]+$/,
      "Ürün adı sadece harf, rakam ve boşluk içerebilir."
    ),
  price: z
    .number({
      invalid_type_error: "Lütfen geçerli bir sayı girin.",
    })
    .min(0, "Fiyat 0'dan büyük olmalıdır.")
    .max(100000, "Fiyat 100.000'den büyük olamaz.")
    .positive("Fiyat pozitif bir sayı olmalıdır.")
    .refine((value) => !Number.isNaN(value), {
      message: "Lütfen geçerli bir sayı girin.",
    }),
  category: z.string(),
  subCategory: z.string().optional(),
  brandCode: z
    .string()
    .min(3, "Marka kodu en az 3 karakter olmalıdır.")
    .max(10, "Marka kodu en fazla 10 karakter olabilir."),
  discountPercentage: z
    .number({
      invalid_type_error: "Lütfen geçerli bir sayı girin.",
    })
    .min(0, "İndirim oranı 0'dan küçük olamaz.")
    .max(100, "İndirim oranı 100'den büyük olamaz.")
    .int("İndirim oranı tam sayı olmalıdır.")
    .refine((value) => !Number.isNaN(value), {
      message: "Lütfen geçerli bir sayı girin.",
    })
    .optional(),
  discountEndTime: z
    .string()
    .optional()
    .refine(
      (date) => !date || new Date(date) > new Date(),
      "İndirim bitiş zamanı bugünden sonra olmalıdır."
    ),
  installmentCount: z
    .number({
      invalid_type_error: "Lütfen geçerli bir sayı girin.",
    })
    .min(0, "Taksit sayısı 0'dan küçük olamaz.")
    .refine((value) => !Number.isNaN(value), {
      message: "Lütfen geçerli bir sayı girin.",
    })
    .optional(),
  installmentPrice: z
    .number({
      invalid_type_error: "Lütfen geçerli bir sayı girin.",
    })
    .min(0, "Taksit fiyatı 0'dan küçük olamaz.")
    .refine((value) => !Number.isNaN(value), {
      message: "Lütfen geçerli bir sayı girin.",
    })
    .optional(),
  stock: z
    .number({
      invalid_type_error: "Lütfen geçerli bir sayı girin.",
    })
    .min(0, "Stok sayısı 0'dan küçük olamaz.")
    .int("Stok sayısı tam sayı olmalıdır.")
    .refine((value) => !Number.isNaN(value), {
      message: "Lütfen geçerli bir sayı girin.",
    }),
  limit: z
    .number({
      invalid_type_error: "Lütfen geçerli bir sayı girin.",
    })
    .min(0, "Limit en az 0 olmalıdır.")
    .int("Limit tam sayı olmalıdır.")
    .refine((value) => !Number.isNaN(value), {
      message: "Lütfen geçerli bir sayı girin.",
    })
    .optional(),
  seller: z
    .string()
    .min(3, "Satıcı adı en az 3 karakter olmalıdır.")
    .max(50, "Satıcı adı en fazla 50 karakter olabilir."),
  description: z
    .string()
    .min(10, "Açıklama en az 10 karakter olmalıdır.")
    .max(1000, "Açıklama en fazla 1000 karakter olabilir."),
  images: z
    .array(z.string().url("Geçerli bir URL girin."))
    .min(1, "En az bir resim ekleyin."),
  creditCard: z.boolean().optional(),
  fibabanka: z.boolean().optional(),
  freeShipping: z.boolean().optional(),
  guarantee: z.boolean().optional(),
  isContract: z.boolean().optional(),
  isSpecialForYou: z.boolean().optional(),
  isBestOffer: z.boolean().optional(),
  isBestSeller: z.boolean().optional(),
  badges: z.array(z.string()).optional(),
  features: z
    .array(
      z.object({
        name: z.string().min(1, "Özellik adı zorunludur."),
        value: z.string().min(1, "Özellik değeri zorunludur."),
      })
    )
    .min(1, "En az bir özellik girilmelidir."),
  configuration: z
    .array(
      z.object({
        title: z.string(),
        options: z
          .array(
            z.object({
              label: z.string(),
              color: z.string(),
            })
          )
          .min(1, "Lütfen en az bir renk seçin."),
      })
    )
    .min(1, "Lütfen en az bir renk seçin."),
});

const AdminPage = () => {
  const { mutate: addProduct, isPending } = useMutation({
    mutationFn: (data: Product) => addProductFromDb(data),

    onSuccess: () => {
      notify("Ürün başarıyla eklendi.", "success");
      reset();
    },

    onError: () => {
      notify("Ürün eklenirken bir hata oluştu.", "error");
    },
  });

  const {
    reset,
    formState: { errors },
    setValue,
    register,
    handleSubmit,
  } = useForm<Product>({
    resolver: zodResolver(schema),
    defaultValues: {
      discountPercentage: 0,
      discountEndTime: "",
      installmentCount: 0,
      installmentPrice: 0,
      limit: null,
    },
  });

  const onSubmit: SubmitHandler<Product> = (data) => {
    const categoryCode = getCategoryKeyByValue(data.category);

    const subCategoryCode = data.subCategory
      ? getCategoryKeyByValue(data.subCategory)
      : getCategoryKeyByValue(data.category);

    const subCategory =
      data.subCategory && data.subCategory !== ""
        ? data.subCategory
        : data.category;

    const date = new Date(
      data.discountEndTime !== "" ? data.discountEndTime : "2024-08-30"
    );
    const discountEndTime = date.toISOString();

    const newProduct = {
      ...data,
      id: new Date().getTime().toString(),
      date: new Date().toISOString(),
      subCategory,
      categoryCode: categoryCode ?? "",
      subCategoryCode: subCategoryCode ?? "",
      brandCode: data.brandCode.toLowerCase(),
      rating: 0,
      discountEndTime,
      otherSellers: [],
      comments: [],
      qa: [],
      isNew: true,
    };

    addProduct(newProduct);
  };

  const onError = () => {
    console.log("Errors:", errors);
    if (Object.keys(errors).length > 0) {
      notify("Formda doldurulması gereken alanlar var!", "error");
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <DeleteLink href="/admin/deleteProduct">Ürün Sil</DeleteLink>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <BasicFeatures
              register={register}
              setValue={setValue}
              errors={errors}
            />
            <SalesFeatures
              register={register}
              setValue={setValue}
              errors={errors}
            />
            <OtherFeatures
              register={register}
              setValue={setValue}
              errors={errors}
            />

            <Button
              type="submit"
              style={{
                display: "flex",
                margin: "1rem auto",
              }}
            >
              {isPending ? <MinimalLoading /> : "Ürünü Kaydet"}
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
